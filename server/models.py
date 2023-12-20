from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
property

from config import db, bcrypt


# Models



# Table for the users
# Has the user_type property to enable 2 types of users
# Type1-> Customers
# Type2-> Sellers 

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    user_type = db.Column(db.String)

    # relationships
    reviews = db.relationship('Review', backref='user')
    cart = db.relationship('Cart', uselist=False, backref='user')
    orders = db.relationship('Order', backref='user')

    #password stuff
    @hybrid_property
    def password_hash(self):
        return self._password_hash
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8')
        )
        self._password_hash = password_hash.decode('utf-8')
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash,
            password.encode('utf-8')
        )
    #validations

    #serializers
    serialize_rules = ('-reviews', '-cart', '-orders')

class Seller(db.Model, SerializerMixin):
    __tablename__ = 'sellers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    address = db.Column(db.String)
    
    #relationships
    products = db.relationship('Product', backref='farmer')

    #validations

    #serializers - was causing problems, commented it out
    serialize_rules = ('-products')


class Product (db.Model, SerializerMixin):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    price = db.Column(db.Float)
    # for example '10 ounce can', '1 lbs package'
    quantity_desc = db.Column(db.String)
    product_cat = db.Column(db.String)

    # product_images
    image_files = db.Column(db.String)

    # for example grass-fed, organic etc.
    qualities = db.Column(db.String)

    #relationships
    # seller identifier
    seller_id = db.Column(db.Integer, db.ForeignKey('sellers.id'))
    reviews = db.relationship('Review', backref='products')
    cart_items = db.relationship('CartItem', backref='products')

    #validations

    #serializers
    serialize_rules = ('-sellers', '-reviews', '-cart_items')

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    rating = db.Column(db.Integer)
    post_date = db.Column(db.DateTime)
    update_date= db.Column(db.DateTime)
    
    # relationships
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('Product.id'))

    # validations
    # rating must be between 1 and 5 stars
    @validates('rating')
    def validate(self, key, value):
        if (1<=value<=5):
            return value
        else:
            raise ValueError('Rating must be between 1 and 5')


    #serializers
    serialize_rules = ('-user', '-product')

# The last cart for any users
# Enables storing latest cart 
    
class Cart(db.Model, SerializerMixin):
    __tablename__ = 'cart'
    id = db.Column(db.Integer, primary_key=True)


    # relationships
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    cart_items = db.relationship('Product', backref='cart')

    # validations

    # serializers
    serialize_rules = ('-user', '-products')


class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    delivery_date = db.Column(db.DateTime, default=datetime.utcnow)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    delivery_address = db.Column(db.String)

    # relationships
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    cart_id = db.Column(db.Integer, db.ForeignKey('Cart.id'))

    # validations

    # serializers
    serialize_rules = ('-user', '-cart')
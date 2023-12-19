from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!

## User
## Seller 


class User(db.Model, SerializerMixin):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    user_type = db.Column(db.String)

    #relationships
    reviews = db.relationship('Review', backref='user', cascade='all, delete-orphan')
    cart = db.relationship('Cart', uselist=False, backref='user', cascade='all, delete-orphan')
    orders = db.relationship('Order', backref='user', cascade='all, delete-orphan')

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

class Farmer(db.Model, SerializerMixin):
    __tablename__ = 'Farmer'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    address = db.Column(db.String)

    #relationships
    products = db.relationship('Product', backref='farmer', cascade='all, delete-orphan')

    #validations

    #serializers - was causing problems, commented it out
    # serialize_rules = ('-products')

class Product(db.Model, SerializerMixin):
    __tablename__ = 'Product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Float)
    category = db.Column(db.String)
    count = db.Column(db.Integer)
    image_src = db.Column(db.String)
    # farmer_name = db.Column(db.Integer, db.ForeignKey('Farmer.name'))
    farmer_id = db.Column(db.Integer, db.ForeignKey('Farmer.id'))

    #relationships
    reviews = db.relationship('Review', backref='product', cascade='all, delete-orphan')
    cart_items = db.relationship('CartItem', backref='product', cascade='all, delete-orphan')

    #validations

    #serializers
    serialize_rules = ('-farmer', '-reviews', '-cart_items')

class Review(db.Model, SerializerMixin):
    __tablename__ = 'Review'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    rating = db.Column(db.Integer)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('Product.id'))

    #relationships

    #validations

    @validates('rating')
    def validate(self, key, value):
        if (1<=value<=5):
            return value
        else:
            raise ValueError('Rating must be between 1 and 5')

    #serializers
    serialize_rules = ('-user', '-product')

class Cart(db.Model, SerializerMixin):
    __tablename__ = 'Cart'
    id = db.Column(db.Integer, primary_key=True)
    cart_total = db.Column(db.Float)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))

    #relationships
    cart_items = db.relationship('CartItem', backref='cart', cascade='all, delete-orphan')

    #validations

    #serializers
    serialize_rules = ('-user', '-cart_items')

class CartItem(db.Model, SerializerMixin):
    __tablename__ = 'CartItem'
    id = db.Column(db.Integer, primary_key=True)
    product_quantity = db.Column(db.Integer)
    cart_id = db.Column(db.Integer, db.ForeignKey('Cart.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('Product.id'))

    #relationships

    #validations

    #serializers
    serialize_rules = ('-cart', '-product')

class Order(db.Model, SerializerMixin):
    __tablename__ = 'Order'
    id = db.Column(db.Integer, primary_key=True)
    exp_delivery_date = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime)
    delivery_address = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    cart_id = db.Column(db.Integer, db.ForeignKey('Cart.id'))

    #relationships

    #validations

    #serializers
    serialize_rules = ('-user', '-cart')
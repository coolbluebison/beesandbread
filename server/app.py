#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, render_template
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports

from models import User, Seller, Product, Review, Cart, Order



# @app.route('/')
# def index():
#     return '<h1>Phase 4 Project Server</h1>'

# Views go here! use either route!
# @app.errorhandler(404)
# def not_found(e):
#     return render_template("index.html")


class UserNorm(Resource):

    # gettin all the users
    def get(self):
        users_to_get = User.query.all()
        data = [user.to_dict() for user in users_to_get]

        return data, 200
    
    # posting a new user
    def post(self):

        user_to_create = request.get_json()
        
        try:
            new_user = User(
                username = user_to_create['username'],
                email = user_to_create['email'],
                _password_hash = user_to_create['_password_hash'],
                address = user_to_create['address']
            )

            db.session.add(new_user)
            db.session.commit()
            return new_user.to_dict(), 201
        
        except Exception as e:
            print(e.__str__())
            raise Exception("There was an error while creating the user")

api.add_resource(UserNorm, 'users_table')


class UserById(Resource):

    # getting a specific user

    def get(self, id):
        user_to_get = User.query.filter_by(id=id).first()
        
        return user_to_get, 200
    
    def patch(self, id):
        data_to_patch_from = request.get_json()
        user_to_choose = User.query.filter_by(id=id).first()

        if user_to_choose != None:
            for field in data_to_patch_from:
                setattr(user_to_choose, field, user_to_choose[field])
        else:
            return {"error":"user does not exist"}, 404
        
    def delete(self, id):
        user_to_delete = User.query.filter_by(id=id).first()

        if user_to_delete != None:
            db.session.delete(user_to_delete)
            db.session.commit()
            return {'success':"user is deleted"}, 204
        else:
            return {"error":"user does not exist"}

api.add_resource(UserById, "users_table/<int:id>")


class SellerNorm(Resource):

    # getting all sellers
    def get(self):
        sellers_to_get = Seller.query.all()
        data = [seller.to_dict() for seller in sellers_to_get]

        return data, 200
    
    # creating a new seller

    def post(self):
        
        seller_to_create = request.to_json()
        
        try:
            new_seller = Seller(
                name = seller_to_create['name'] ,
                address = seller_to_create['address'],
                description_assets = seller_to_create['description_assets'],
                email = seller_to_create['email'],
                phone_number = seller_to_create['phone_number']
            )
         
            db.session.add(new_seller)
            db.session.commit()

            return new_seller.to_dict(), 201
        
        except Exception as e:
            print(e.__str__())
            raise Exception("There was an error while creating the seller")
        
api.add_resource(SellerNorm, "sellers_table")


class SellerById(Resource):

    # getting a specific seller
    def get(self, id):
        seller_to_get = Seller.query.filter_by(id=id).first()
        
        return seller_to_get.to_dict(), 200
    
    def patch(self, id):
        data_to_patch_from = request.to_json()
        seller_to_get = Seller.query.filter_by(id=id).first()

        if seller_to_get != None:
            for field in data_to_patch_from:
                setattr(field, seller_to_get, data_to_patch_from[field])
        else:
            return {"error":"user does not exist"}, 404         


    def delete(self,id):
        
        seller_to_delete = Seller.query.filter_by(id=id).first()
        
        if seller_to_delete != None:
            db.session.delete(seller_to_delete)
            db.session.commit()
            
            return {'success':'user is deleted successfully'}, 204
        
        else:
            return {"error":"user does not exist"}

api.add_resource(SellerById, "sellers_table/<int:id>")


class ProductNorm(Resource):
    def get(self):
        products = Product.query.all()
        return [product.to_dict() for product in products], 200

    def post(self):
        product_data = request.get_json()
        new_product = Product(
            name=product_data['name'],
            description=product_data['price'],
            price=product_data['quantity_desc'],
            stock=product_data['product_cat'],
            image_files=product_data['image_files'],
            qualities=product_data['qualities'],
            seller_id=product_data['seller_id']
        )
        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict(), 201

api.add_resource(ProductNorm, '/products')


class ProductById(Resource):
    def get(self, id):
        product = Product.query.get(id)
        return product.to_dict() if product else {'error': 'Product not found'}, 404

    def patch(self, id):
        product = Product.query.get(id)
        if product:
            updates = request.get_json()
            for key, value in updates.items():
                setattr(product, key, value)
            db.session.commit()
            return product.to_dict(), 200
        else:
            return {'error': 'Product not found'}, 404

    def delete(self, id):
        product = Product.query.get(id)
        if product:
            db.session.delete(product)
            db.session.commit()
            return {'message': 'Product deleted'}, 204
        else:
            return {'error': 'Product not found'}, 404

api.add_resource(ProductById, '/products/<int:id>')


class ReviewNorm(Resource):
    def get(self):
        reviews = Review.query.all()
        return [review.to_dict() for review in reviews], 200

    def post(self):
        review_data = request.get_json()
        new_review = Review(
            # Assuming these are the fields in your Review model
            user_id=review_data['user_id'],
            product_id=review_data['product_id'],
            rating=review_data['rating'],
            comment=review_data['comment']
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict(), 201

api.add_resource(ReviewNorm, '/reviews')


class ReviewById(Resource):
    def get(self, id):
        review = Review.query.get(id)
        return review.to_dict() if review else {'error': 'Review not found'}, 404

    def delete(self, id):
        review = Review.query.get(id)
        if review:
            db.session.delete(review)
            db.session.commit()
            return {'message': 'Review deleted'}, 204
        else:
            return {'error': 'Review not found'}, 404

api.add_resource(ReviewById, '/reviews/<int:id>')


class CartNorm(Resource):
    def get(self):
        carts = Cart.query.all()
        return [cart.to_dict() for cart in carts], 200

    def post(self):
        cart_data = request.get_json()
        new_cart = Cart(
            # Assuming these are the fields in your Cart model
            user_id=cart_data['user_id'],
            product_id=cart_data['product_id'],
            quantity=cart_data['quantity']
        )
        db.session.add(new_cart)
        db.session.commit()
        return new_cart.to_dict(), 201

api.add_resource(CartNorm, '/carts')


class CartById(Resource):
    def get(self, id):
        cart = Cart.query.get(id)
        return cart.to_dict() if cart else {'error': 'Cart not found'}, 404

    def patch(self, id):
        cart = Cart.query.get(id)
        if cart:
            updates = request.get_json()
            for key, value in updates.items():
                setattr(cart, key, value)
            db.session.commit()
            return cart.to_dict(), 200
        else:
            return {'error': 'Cart not found'}, 404

    def delete(self, id):
        cart = Cart.query.get(id)
        if cart:
            db.session.delete(cart)
            db.session.commit()
            return {'message': 'Cart deleted'}, 204
        else:
            return {'error': 'Cart not found'}, 404

api.add_resource(CartById, '/carts/<int:id>')


class OrderNorm(Resource):
    def get(self):
        orders = Order.query.all()
        return [order.to_dict() for order in orders], 200

    def post(self):
        order_data = request.get_json()
        new_order = Order(
            # Assuming these are the fields in your Order model
            user_id=order_data['user_id'],
            total_amount=order_data['total_amount'],
            status=order_data['status']
            # Add other fields as needed
        )
        db.session.add(new_order)
        db.session.commit()
        return new_order.to_dict(), 201

api.add_resource(OrderNorm, '/orders')


class OrderById(Resource):
    def get(self, id):
        order = Order.query.get(id)
        return order.to_dict() if order else {'error': 'Order not found'}, 404

    def patch(self, id):
        order = Order.query.get(id)
        if order:
            updates = request.get_json()
            for key, value in updates.items():
                setattr(order, key, value)
            db.session.commit()
            return order.to_dict(), 200
        else:
            return {'error': 'Order not found'}, 404

    def delete(self, id):
        order = Order.query.get(id)
        if order:
            db.session.delete(order)
            db.session.commit()
            return {'message': 'Order deleted'}, 204
        else:
            return {'error': 'Order not found'}, 404

api.add_resource(OrderById, '/orders/<int:id>')




@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

if __name__ == '__main__':
    app.run(port=5555, debug=True)


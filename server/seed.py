
#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Seller, Product

def seed_users():

    # Creating some sample users

    user_data = [
        {"username":'byildiran', "email":"b.yildiran@bees.com", "_password_hash":"pasword","address":"Denver at Denver St."},
        {"username":"tritheuiguy", "email":"tri@bees.com","_password_hash":"pasword", "address":"Downtown Denver Tower"}
    ]

    for user in user_data:
        new_user = User(username=user["username"], email=user["email"], _password_hash=user["_password_hash"], address=user["address"])
        db.session.add(new_user)





def seed_sellers():

    seller_data = [
        {"name":"Big Sky Ranch", "address": "300 River Rd. Colorado", "description_assets":"Organic and Fresh Farm Produce", "email":"contact@bigskyranch.com", "phone_number":"720-111-2222"},
        {"name":"Bakers Baker", "address": "South Bakery Road. Denver", "description_assets":"Best Baked Goods Daily for Denver", "email":"contact@bakersbakery.com", "phone_number":"720-111-3333"},
    ]

    for seller in seller_data:
        new_seller = Seller(name=seller['name'], address=seller['address'], description_assets=seller['description_assets'], email=seller['email'], phone_number=seller['phone_number'])
        db.session.add(new_seller)

def seed_products():
    product_data = [
        {"name": "Grass Fed Himalayan Salted Ghee", "price": 12.49, "quantity_desc": "9.5 oz jar", "product_cat": "Pantry", "image_files": "https://img.thrivemarket.com/store/full/8/6/861555000125-1_1_1.jpg?w=1260&jpg_quality=90", "qualities": "Organic, GMO-Free", "seller_id": 11},
        {"name": "Free-Range Eggs", "price": 2.99, "quantity_desc": "12 count", "product_cat": "Dairy", "image_files": "https://img.thrivemarket.com/store/full/1/9/191011000872_front_1_1.jpg?w=256&jpg_quality=80", "qualities": "Pasture Raised", "seller_id": 12},
    ]

    for product in product_data:
        new_product = Product(name=product['name'], price=product['price'], quantity_desc=product['quantity_desc'], product_cat=product['product_cat'], image_files=product['image_files'], qualities=product['qualities'], seller_id = product["seller_id"])

        db.session.add(new_product)




if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        User.query.delete()
        Seller.query.delete()
        Product.query.delete()

        # seed_users()
        # seed_sellers()
        seed_products()

        db.session.commit()




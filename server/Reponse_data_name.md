
1. User: 
a) Register = `newUser` - (id:token, User.name,User.username, User.password, User.role)
b) Login = `token` -> (user.id, user.role)
c) GetAllusers = `Allusers` -> For admin
---------------------------------------------
2. Basket:
a) Post = `newBasket` -> (id, order,userId )
b) Get = `loginBasket` -> (order) -> Tokenlangan user.id ni query zaprosda `token` dab yibaramiz
c) Delete = `basket` -> (id, order,userId) Paramsda Basketni `id`sini baramiz 
--------------------------------------------------------
3. Categories:
a) Post = `newCategory` -> (id, name)
b) Get = `categories` -> (id, name)
c) Put = `category` -> (id, name)
d) Delete = `category` -> (id, name) Paramsda Category `id`sini baramiz 
------------------------------------------
4. Types: 
a) Post = `newType` -> (id, name, img, categories_id)
b) GetbyCatId = `types` -> (id, name, img, categories_id) -> //Eslatma! paramsda  `categories_id` ni `id` o'zgaruvchiga alib yibaramiz
C) GetallTypes = `allTypes`-> (id, name, img, categories_id)
c) Put = `type` -> (id, name, img, categories_id)
d) Delete = `type` -> (id, name, img, categories_id) Paramsda Types `id`sini baramiz 
---------------------------------------------------------------
5. Products: 
a) Post = `newProduct` -> (id, name, img, price, desc,type_id)
b) GetbyTypeId = `products` -> (id, name, img, price, desc,type_id) -> Elsatma! paramsda  type_id ni `id` o'zgaruvchiga alib yibaramiz
c) GetbySearch = `products` -> (id, name, img, price, desc,type_id) -> Elsatma! query zaprosda key `name` dab yibaramiz
d) GetbyId = `product` -> (id, name, img, price, desc,type_id) -> Basketa id bo'yicha yibarish uchun product.id ni `id` o'zgaruvchiga alib yibaramiz
f) GetallProducts = `allProducts`-> (id, name, img, price, desc,type_id)
e) Put = `product` -> (id, name, img, price, desc,type_id)
h) Delete = `product` -> (id, name, img, price, desc,type_id) Paramsda Product `id`sini baramiz 
----------------------------------------------------------------------------
6. Order:
a) Post = `newOrder` -> (name, surname, phone, viloyat, tuman, shahar, aniq_adress, umummiybahosi, productId, status, basketId)
b) Get = `order` -> (name, surname, phone, viloyat, tuman, shahar, aniq_adress, umummiybahosi, productId, status, basketId) pa
c) Delete = `order` -> (name, surname, phone, viloyat, tuman, shahar, aniq_adress, umummiybahosi, productId, status, basketId) Paramsda Order `id`sini baramiz 
------------------------------------------------------------------------------------------
7. Count:
a) Post = `count` -> (id, productId,  counts, basketId)
b) Get = `count` -> (id, productId,  counts, basketId) Elsatma! query zaprosda key `productId & basketId` dab yibaramiz
c) Delete = `count` -> (id, productId,  counts, basketId) Paramsda Count `id`sini baramiz 
------------------------------------------------------------------------------------------------
8. Banner:
a) Post = `banner` -> (id, img, title)
b) Get = `banner` -> (id, img, title)
c) Put = `banner` -> (id, img, title) Eslatma! Paramsda Bannerni `id`si bariladi
d) Delete = `banner` -> (id, img, title) Paramsda Bannerni `id`sini baramiz 
 

SQL SHELL (psql) = `CREATE DATABASE shop_1;`
Server's terminal = `npx prisma db push`
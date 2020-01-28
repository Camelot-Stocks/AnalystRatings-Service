#Analyst Ratings 
### Set up steps
Step 1: Run npm install to install dependencies
Step 2: Create databse named 'stocks_db' in postgreSQL
Step 3: Run npm run postgres:setup to populate database
Step 4: Run npm start to run server

#Api Routes
Get:
- Get all ratings from a specific stock id: /ratings/getData/:id
- Get all stocks 'api/getStocks'
- Get all analysts 'api/getAnalysts'

Post: 
- Add analyst: '/api/addAnalyst'
- Add review: '/rating/addReview'
_ add stock: '/api/addStock'

Update: 
- Update analyst: '/ratings/analysts/:analystId'
- Update review:'/ratings/review/:reviewId/'

Delete: 
- Delete analyst: '/ratings/analysts/:analystId'
- Delete review:'/ratings/review/:reviewId/'

# SAM-Arts
Art gallery web application using Angular | Node.js | Express.js | MongoDB   (MEAN Stack)

## Objective
* The goal is to build a Art Gallery web application where users can buy and sell paintings online.
* The project was developed as Full Stack Web app using technologies such as Angular | Node.js | Express.js | MongoDB (MEAN Stack)

## System Design
### Architecture
* Web Application uses a Client-Server Architecture with:
  * Client components developed using Angular 4 - Folder - '/client/Angularecommerce'   
  * Server Restful Api's developed using Node.js, Express.js, MongoDB - Folder - '/server'
![](/images/2.png) 
![](/images/MEAN.PNG) 
### Technology stack
![](/images/0.PNG)
<table>
<thead>
<tr>
<th>Area</th>
<th>Technology</th>
</tr>
</thead>
<tbody>
	<tr>
		<td>Front-End</td>
		<td>Angular, Bootstrap, HTML5, CSS3, Typescript</td>
	</tr>
	<tr>
		<td>Back-End</td>
		<td>Express, Node.js</td>
	</tr>
  <tr>
		<td>Authentication</td>
		<td>JWT(JSON Web Tokens)</td>
	</tr>
	<tr>
		<td>API Testing</td>
		<td>Postman</td>
	</tr>
	<tr>
		<td>Database</td>
		<td>MongoDB</td>
	</tr>
    <tr>
		<td>Other APIs Used</td>
		<td>Stripe Payment, Algolia Search</td>
	</tr>
</tbody>
</table>

## Screenshots

##### HomePage
![](/images/home.png)

##### Some of the Best Paintings
![](/images/home1.png)

##### Search
![](/images/search.png)

##### Add to cart
![](/images/addtocart.png)

##### Cart
![](/images/cart.png)

##### Checkout & Payment
![](/images/checkout.png)

##### Reviews
![](/images/reviews.png)

##### Track Orders
![](/images/myorders.png)

## Steps for Project Execution :

##### Client Install
```
cd client/Angularecommerce
npm install
ng serve -o
```
##### Server Install
```
cd server
npm install
node server.js
```


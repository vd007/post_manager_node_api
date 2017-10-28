basic user module

INSTALLATION

1. setup node and mongo on the machine
2. clone the repo
3. npm install
4. npm install bluebird
5. npm install jsonwebtoken


START THE APP

command : npm start

USAGE

1.register the user using get request</br>
http://localhost:3000/users/registration?username=navneet&password=test&name=dwivedi&email=vd@21&dob=1991-07-01&status=married

2.login with username and password</br>
http://localhost:3000/users/login?username=navneet&password=test

3.update user details only username is mandatory</br>
http://localhost:3000/users/update?username=navneet&password=test&name=dwivedi&email=vd@21&dob=1991-07-01&status=unmarried

4.Create Posts</br>
http://localhost:3000/posts/createPost?username=navneet&title=title2&content=content2&status=draft

5.List Posts of a user only logedIn user can check his posts</br>
http://localhost:3000/posts/GetPosts?username=navneet

6.Update Post using post id available in getPosts api</br>
http://localhost:3000/posts/updatePost?username=navneet&title=title2&content=content2&status=published&post_id=1509224878760

7.Delete posts using post id available in getPosts api</br>
http://localhost:3000/posts/deletePost?username=navneet&post_id=1509224878760

const request = require('supertest');
const mongoose = require("mongoose");
const route = require('../routes/postRoutes')


require("dotenv").config();

describe('API de Postagem', () => {   
    
    const mongo_uri = 'mongodb://localhost:27017/api-blog';
    beforeEach(async () => {     
        await mongoose.connect(mongo_uri);        
    });    
  
    afterEach(async () => {
        await mongoose.disconnect();
    });

    it('Deveria retorar todos as postagens', async () => {
        //Act
        const response = await request(route).get('/posts')

        //Assert
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeUndefined();
    });

    it('Deveria criar uma nova postagem', async () => {
        //Arrange
        const postData = { title:'Nova postagem', description:'Teste de Nova postagem', author:'Author'};   

        //Act
        const response = await request(route).post('/posts').send(postData);

        //Assert      
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(postData));
    });

    it('Deveria retornar uma postagem existente', async () => {
        //Arrange
        const postData = { title: 'Nova postagem', description: 'Teste de Nova postagem', author: 'Author' };
        //Act
        const createUserResponse = await request(route).post('/posts').send(postData);   
        const userId = createUserResponse.body._id;
        const getUserResponse = await request(route).get(`/posts/${userId}`);

        //Assert
        expect(getUserResponse.statusCode).toBe(200);
        expect(getUserResponse.body).toEqual(expect.objectContaining(postData));
    });

    test('Deveria atualizar uma postagem ', async () => {
        //Arrange
        const user = await request(route)
            .post('/posts')
            .send({title: 'New Post', description: 'Teste de update post antes', author: 'Author'});
        const updatedpostData = {title: 'Post Updated', description: 'Teste de update post', author: 'Author'};
        //Act/Assert
        await request(route)
            .put(`/posts/${user.body._id}`)
            .send(updatedpostData)
            .expect(200)
            .then((response) => {
            expect(response.body.name).toBe(updatedpostData.name);
            expect(response.body.email).toBe(updatedpostData.email);
            });
    });
    test('Deveria deletar uma postagem existente', async () => {
        const user = await request(route)
            .post('/posts')
            .send({title: 'New Post', description: 'Teste de delete post', author: 'Author'});
        
        await request(route)
            .delete(`/posts/${user.body._id}`)
            .expect(200);        
           
    });


    it('Deveria pesquisar uma postagem', async () => {
        //Arrange
        const postData = 'Title';        
        
        const getUserResponse = await request(route).post('/posts/search/').query({query: postData});
        

        //Assert       
        expect(getUserResponse.statusCode).toBe(200);
        expect.stringContaining(postData);
    });
});
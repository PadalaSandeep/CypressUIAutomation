/// <reference types="cypress" />

it('Get users', function(){
   cy.request({
       method : 'GET',
       url : 'https://reqres.in/api/users/3'
   }).then((response)=>{
       console.log(response)
       expect(response.status).to.eq(200)
       expect(response.body).
   })
})
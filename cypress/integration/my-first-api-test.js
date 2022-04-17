/// <reference types="cypress" />

it('Get users', function(){
   cy.request({
       method : 'GET',
       url : 'https://reqres.in/api/users/3'
   })
   .should((response)=>{
       console.log(response)
       expect(response.status).to.eq(200)
       expect(response.body.data).has.property('id', 3)
   })
})
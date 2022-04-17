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

it('Post test', function(){
  cy.request({
    method : 'POST',
    url : 'https://reqres.in/api/users',
    body: {
        "name": "morpheus",
        "job": "leader"
    }
  }) .should((response)=>{
    console.log(response)
    expect(response.status).to.eq(200)
    expect(response.body.data).has.property('id', 3)
})
    
})
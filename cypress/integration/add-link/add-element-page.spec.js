describe('Conseguir adiciona um elemento de forma a preencher os campos corretamente', () =>{
  beforeEach(() =>{
    cy.visit('/')
  })
  
  it('Deve adicionar um elemento preenchendo todos os campos', () =>{

    //Adiciona um elemento a lista de
    cy.get('[data-cy=first-name]').type('Lucas')
    cy.get('[data-cy=last-name]').type('Dechenier')
    cy.get('[data-cy=participation]').type('10')
    cy.get('[data-cy=send]').click()

    //Verifica se esse elemento de fato foi adicionado e existe na tela
    cy.contains('Lucas').should('exist')
    cy.contains('Dechenier').should('exist')
    cy.contains('10').should('exist')

  })

  it('Não deve adicionar item se faltar um dos campos', () =>{
    //Tenta adicionar um elemento da lista faltando o ultimo campo
    cy.get('[data-cy=first-name]').type('Lucas')
    cy.get('[data-cy=last-name]').type('Dechenier')
    cy.get('[data-cy=send]').click()

    //Olha se o elemento não foi adicionado
    cy.contains('Lucas').should('not.exist')
    cy.contains('Dechenier').should('not.exist')
    
    //Verifica se aconteceu resposta ao usuário
    cy.contains('It must be a number').should('exist')
    cy.get('[data-cy=first-name]').clear()
    cy.get('[data-cy=last-name]').clear()

    //Tenta adicionar um elemento da lista faltando o segundo campo
    cy.get('[data-cy=first-name]').type('Lucas')
    cy.get('[data-cy=participation]').type('10')
    cy.get('[data-cy=send]').click()

    //Olha se o elemento não foi adicionado
    cy.contains('Lucas').should('not.exist')
    cy.contains('10').should('not.exist')
    
    //Verifica se aconteceu resposta ao usuário
    cy.contains('Last name is required').should('exist')
    cy.get('[data-cy=first-name]').clear()
    cy.get('[data-cy=participation]').clear()

    //Tenta adicionar um elemento da lista faltando o primeiro campo
    cy.get('[data-cy=last-name]').type('Dechenier')
    cy.get('[data-cy=participation]').type('10')
    cy.get('[data-cy=send]').click()

    //Olha se o elemento não foi adicionado
    cy.contains('Dechenier').should('not.exist')
    cy.contains('10').should('not.exist')
    
    //Verifica se aconteceu resposta ao usuário
    cy.contains('First name is required').should('exist')
  })

  it('Não deve adicionar item caso a participação não seja um número', () =>{
    //Tenta adicionar um elemento sem a participação ser número
    cy.get('[data-cy=first-name]').type('Lucas')
    cy.get('[data-cy=last-name]').type('Dechenier')
    cy.get('[data-cy=participation]').type('12l')
    cy.get('[data-cy=send]').click()

    //Verifica se o elemento não foi adicionado
    cy.contains('Lucas').should('not.exist')
    cy.contains('Dechenier').should('not.exist')
    cy.contains('10').should('not.exist')

    //Verifica se aconteceu resposta ao usuário
    cy.contains('It must be a number').should('exist')
  })
})
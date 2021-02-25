describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Pokemon can be found', () => {
    cy.visit('http://localhost:5000')
    cy.contains('squirtle').click()
    cy.contains('torrent')
  })
})
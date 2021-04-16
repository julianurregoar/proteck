describe('Accounts', () => {
  var a = 5;
  it('equal', () => {
    expect(1==1, "the arguments are different").to.equal(true)
  });

  it('no equal', () => {
    expect(1 - 2).to.not.equal(0);
  });


  it('true', () => {
    expect(2 === 2).to.be.true;
  });

  it('false', () => {
    expect(2 === 1).to.be.false;
  });

  it('exist', () => {
    expect(a).to.exist;
  });

  it('less than', () => {
    expect(a).to.be.lessThan(10)
  });

  it('greater than', () => {
    expect(a).to.be.greaterThan(2)
  });
})

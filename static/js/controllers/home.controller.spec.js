describe('Home Controller', function(){
  var SwarmService;

  beforeEach(module('app.controllers'));
  beforeEach(module('app.services'));

  beforeEach(inject(function(_SwarmService_){
    SwarmService = _SwarmService_;
  }))

  it('should inject SwarmService', function(){
    expect(SwarmService).toBeDefined();
  });
});

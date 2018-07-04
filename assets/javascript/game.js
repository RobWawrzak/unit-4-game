// When page loads
$(document).ready(function() {
  // luke object

  var luke = {
    nickName: 'luke',
    name: 'Luke Skywalker',
    image: '<img src="assets/images/Luke.jpg" class="image">',
    health: 100,
    attack: 8,
    counterAttackPower: 20
  };

  var yoda = {
    nickName: 'yoda',
    name: 'Master Yoda',
    image: '<img src="assets/images/Yoda.jpg" class="image">',
    health: 130,
    attack: 15,
    counterAttackPower: 30
  };

  var maceWindu = {
    nickName: 'mace',
    name: 'Mace Windu',
    image: '<img src="assets/images/MaceWindu.jpg" class="image">',
    health: 180,
    attack: 7,
    counterAttackPower: 15
  };

  var darthVader = {
    nickName: 'vader',
    name: 'Darth Vader',
    image: '<img src="assets/images/DarthVader.jpg" class="image">',
    health: 180,
    attack: 15,
    counterAttackPower: 25
  };

  var kyloRen = {
    nickName: 'kylo',
    name: 'Kylo Ren',
    image: '<img src="assets/images/KyloRen.jpg" class="image">',
    health: 110,
    attack: 12,
    counterAttackPower: 20
  };

  var darthMaul = {
    nickName: 'maul',
    name: 'Darth Maul',
    image: '<img src="assets/images/DarthMaul.jpg" class="image">',
    health: 100,
    attack: 12,
    counterAttackPower: 24
  };

  // Array of character objects
  var charactersObjects = [
    luke,
    yoda,
    maceWindu,
    darthVader,
    kyloRen,
    darthMaul
  ];

  // Array of strings with characters nick names
  var characters = [];
  var $yourCharacter;
  var $currentEnemy;
  // Your Character's health and attack
  var yourHealth;
  var yourAttack;
  // current's enemy's health and attack
  var currentEnemyHealth = 0;
  var currentEnemyAttack = 0;

  var counter = 0;
  var compoundAttack = 0;
  var isThereOpponent = false;

  // ====================== FUNCTIONS =======================

  function startGame() {
    createCharacters(charactersObjects);
    pickYourCharacter();
    pickYourOpponent();
    // fight();
  }

  // function to create each box/character in the DOM
  function createCharacters(arg) {
    if (arg.length === 6) {
      for (var i = 0; i < arg.length; i++) {
        // jQuery Object that takes the attributes of each character
        var $character = $('<div id=' + arg[i].nickName + '>');
        $character.append('<div class="characterName">' + arg[i].name);
        $character.append(arg[i].image);
        $character.append('<div class="characterHealth">' + arg[i].health);
        $character.attr('data_nickName', arg[i].nickName);
        $character.attr('data_name', arg[i].name);
        $character.attr('data_attack', arg[i].attack);
        $character.attr('data_health', arg[i].health);
        $character.attr('class', 'character col-md-3');

        characters.push(arg[i].nickName);

        $('#charactersList').append($character);
      }
    } // end of if statement
    else if (arg.length <= 3) {
      $('#remainingEnemies').empty();

      characters = [];

      $('#remainingEnemies').append(
        '<div class="title">Remaining Enemies</div>'
      );
      for (var i = 0; i < arg.length; i++) {
        // jQuery Object that takes the attributes of each character
        var $character = $('<div id=' + arg[i].nickName + '>');
        $character.append('<div class="characterName">' + arg[i].name);
        $character.append(arg[i].image);
        $character.append('<div class="characterHealth">' + arg[i].health);
        // att data attributes to use with the logic of the game
        $character.attr('data_nickName', arg[i].nickName);
        $character.attr('data_name', arg[i].name);
        $character.attr('data_attack', arg[i].attack);
        $character.attr('data_health', arg[i].health);
        $character.attr('class', 'enemy');

        characters.push(arg[i].nickName);

        $('#remainingEnemies').append($character);
      }

      if (!$currentEnemy) {
        pickYourOpponent();
      }
    }
  }
});
// CLOSING createCharacter

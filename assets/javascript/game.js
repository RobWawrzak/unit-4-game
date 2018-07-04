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

  var obiWanKenobi = {
    nickName: 'obi',
    name: 'Obi Wan Kenobi',
    image: '<img src="assets/images/obiWanKenobi.jpg" class="image">',
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
    obiWanKenobi,
    darthVader,
    kyloRen,
    darthMaul
  ];

  // Array of strings with characters nick names
  var yourCharacter = null;
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
    // pickYourOpponent();
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
    else if (arg.length <= 5) {
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

        $('#enemyList').append($character);
      }

      if (!$currentEnemy) {
        pickYourOpponent();
      }
    }
  }
  startGame();
});

// CLOSING createCharacter

function pickYourCharacter() {
  // TODO
  // this function should pick your character and then automaticaly make the other charaters enemies.
  $('.character').on('click', function() {
    $('#characters').empty();
    $('#characters').append('<div class="title">Your Character</div>');

    $yourCharacter = $(this);
    $yourCharacter.addClass('yourCharacter');
    $yourCharacter.removeClass('col-md-3 character');

    yourHealth = parseInt($yourCharacter.attr('data_health'));
    yourAttack = parseInt($yourCharacter.attr('data_attack'));

    $('#yourCharacter').append($yourCharacter);

    $('#enemyList').append('<div class="title">Pick Your Enemy</div>');

    // remove the chosen character and then run the createCharacters function again to recreate the 'enemies'
    var indexRemove = characters.indexOf($yourCharacter.attr('data_nickName'));
    charactersObjects.splice(indexRemove, 1);

    // call createCharacters function again, but this time there are only 5
    createCharacters(charactersObjects);
  });
}

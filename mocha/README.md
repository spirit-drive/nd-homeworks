# Домашнее задание к лекции 5.1 «Тестируем сервер, используя Mocha»

## Unit тесты
Для следующей реализации классов Pokemon и PokemonList:

```javascript
class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    }
    show() {
      console.log(`Hi! My name is ${this.name}, my level is ${this.level}`);
    }
    valueOf(){
      return this.level;
      }
    }


class Pokemonlist extends Array{
  constructor(...items){
    items = items.filter(
      item => item instanceof Pokemon
    );
    super(...items);
  }
  add(name,level){
    let newPokemon = new Pokemon(name,level);
    this.push(newPokemon);
  }
  show(){
    this.forEach(function(item){
      item.show();
    });
    console.log(`There are ${this.length} pokemons here.`);
  }
  max(){
    let strongestPokemon = Math.max(...this);
    return this.find(
    item => item.level==strongestPokemon
    );
  }
}
```
1. Напишите тесты на метод `show` класса `Pokemon`;
2. Напишите тесты на метод `add` класса `PokemonList`;
3. Напишите тесты на метод `show` класса `PokemonList`;
4. Напишите тесты на метод `max` класса `PokemonList`;
5. При написании тестов грамотно организовывайте тесты по файлам и наборам. И максимально используйте хуки, и другие возможности Mocha, чтобы тесты соответствовали принципу DRY.

Учитывайте все возможные ситуации при написании тестов на тот или иной метод.

## Интеграционные тесты
Тесты на веб-сервер созданный по заданию [2.2 «Создаем простое API, используя express»](../api/).

1. Напишите тесты на создание пользователя по REST протоколу.
2. Напишите тесты на удаление пользователя по REST протоколу.
Достаточно убедиться что созданный веб-сервер отвечает так как ожидается по протоколу. Создался и удалился ли пользователь проверять не обязательно.

Учитывайте все возможные ситуации при написании тестов на тот или иной запрос.

---
Способы предоставить домашнее задание в порядке приоритета:

1. Исходный код на [BitBucket](https://bitbucket.org/) или [GitHub](https://github.com/)

Не смогу проверить и помочь если прислать:

* Архивы, особенно RAR
* Скриншоты кода
* Теоретический рассказ о возникших проблемах
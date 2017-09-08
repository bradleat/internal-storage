# Internal Storage

Internal Storage is a one function library for the creation of internal storage that cannot be used outside a module and is only accessible with a reference to the object in question.

***Yes! We include TypeScript typings.***

## Usage

`yarn add internal-storage`

or

`npm install -S internal-storage`


### TypeScript

``` TypeScript
    import internal from 'internal-storage';

    const storage = internal<HasPrivateStorage, IPrivateStorage>();

    interface IPrivateStorage {
        importantInternalNumber: number;
    }

    class HasPrivateStorage { 
        constructor(){
            storage(this).importantInternalNumber = 1;
        }
        get importantNumber(){
            return storage(this).importantInternalNumber;
        }
    }
```

### ES6

``` JavaScript
    import internal from 'internal-storage';

    const storage = internal();

    class HasPrivateStorage {
        constructor(){
            storage(this).importantInternalNumber = 1;
        }
        get importantNumber(){
            return storage(this).importantInternalNumber;
        }
    }
```

### ES5

``` JavaScript
    const internal = require('internal-storage').default;

    const storage = internal();

    function HasPrivateStorage() {
        storage(this).importantInternalNumber = 1;
    }

    HasPrivateStorage.prototype.getImportantNumber = function(){
        return storage(this).importantInternalNumber;
    }
```


# Questions

Please add an issue if you have a question or if something broken.

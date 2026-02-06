const accountId = 2328;
let accountEmail = "rolina2328@gmail.com";
var accountPassword = "159142";
let accountCity = "Dhaka";
let accountState;

// accountId = 2899; //  Not allowed (const)

/*
1. accountId value will not change because it is declared with const
2. Prefer not to use var due to block and function scope issues
3. Mostly use const and let
4. Variables should always be declared before use
*/

// Print values
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

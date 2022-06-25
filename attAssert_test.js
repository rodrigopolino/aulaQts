import {
    assertNotEquals,
    assertStrictEquals,
    assertAlmostEquals,
    assertThrows,
} from "http://deno.land/std/testing/asserts.ts" //arquivo de importações no Deno

let valor = '10'

Deno.test("Assert (NOT EQUAL)", () => {
    assertNotEquals(valor, "45", "Erro! O valor é igual!"); //Aqui está certo, pois o valor (10) não é igual a 45 
    assertNotEquals(valor, "10", "Erro! O valor é igual!"); //Aqui vai dar erro, pois o valor (10) é igual a 10
})

Deno.test("Assert (STRICT EQUALS)", () => {
    const x = "15";
    const y = "15";
    assertStrictEquals(x, y);    // Aqui irá dar certo, pois x = y
})

Deno.test("Assert (ALMOST EQUALS e THROWS)", ()=> {
    assertAlmostEquals(5, 7);
    assertAlmostEquals(5 + 7, 12, 1e-16);
    assertThrows(() => assertAlmostEquals(5 + 7, 12, 1e-17));
})


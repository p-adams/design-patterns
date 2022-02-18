const run = Deno.run({ cmd: ["deno", "test"] });
await run.status();

run.close();

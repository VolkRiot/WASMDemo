import init from './pkg/hello_world.js';

const runWasm = async () => {
  // Instantiate our wasm module
  const { add } = await init('./pkg/hello_world_bg.wasm');

  console.log('Wasm module started');

  // Call the Add function export from wasm, save the result
  document.body.textContent = `Hello WASM demo! add result ${add(35, 15)}`;
};

runWasm();

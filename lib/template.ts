export const TEMPLATE = `
  <h1>Font Picker   <astro-dev-toolbar-toggle id="toggle"></astro-dev-toolbar-toggle>
</h1>
  <div class="flex">
    <select id="group-select"></select>
    <select id="font-select"></select>    
    <a id="google-link" href="" target="_blank">View in Google Fonts</a>
  </div>
  <div class="instr">
    <div id="instr1"></div>
    <br/>
    <div id="instr2"></div>
  </div>
  
  <style>
    
    h1 {
        margin: 0;
      }
      
      .flex {
        display: flex;
        align-items: baseline;
      }
      
      select {
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: #222;
        color: #eee;
      }
      
      select:focus-visible {
        outline: 1px solid #888;
      }
      
      select + select {
        margin-left: 10px;
      }
      
      select option {
        background-color: #333;
        color: #eee;
        padding: 5px 5px;
      }
      
      .instr {
        margin-top: 10px;
        border-radius: 5px;
        overflow: hidden;
        padding: 10px;
        background-color: #333;
        font-size: 12px;
        font-family: monospace;
      }
      
      a {
        color: inherit;
        margin-left: 20px;
      }
</style>
`;

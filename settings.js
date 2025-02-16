// Remap keys
api.unmap("<Ctrl-d>");
api.unmap("<Ctrl-u>");
api.map('<Ctrl-d>', 'd');
api.map('<Ctrl-u>', 'e');
api.map('J', 'E');
api.map('H', 'S');
api.map('u', 'X');
api.map('K', 'R');
api.map('L', 'D');
api.map('d', 'x');

api.Visual.style('marks', 'background-color: #df8e1d94;');
api.Visual.style('cursor', 'background-color: #1e66f5;');

/* set theme */
settings.theme=` 
.sk_theme {
  font-size: 12pt;
  background: #1e1e2e;
  color: #4c4f69;
}

.sk_theme tbody {
  color: #F9E2AF;
}

.sk_theme input {
  color: #dce0e8;
}

.sk_theme .url {
  color: #A6E3A1;
}

.sk_theme .annotation {
  color: #EBA0AC;
}

#sk_omnibar {
  width: 70%;
  left: 15%;
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
}

.sk_omnibar_middle {
  top: 15%;
  border-radius: 10px;
}

.sk_theme .omnibar_highlight {
  color: #F9E2AF;
}

/* ---------- Result ---------- */
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
  background: #11111b;
}

.sk_theme #sk_omnibarSearchResult {
  max-height: 60vh;
  overflow: hidden;
  margin: 0 0 16px 0;
  color: #cdd6f4;
}

#sk_omnibarSearchResult>ul {
  margin: 16px;
}

.sk_theme #sk_omnibarSearchResult ul li {
  background: #11111b;
  padding: 1.2rem;
  padding-left: 0.4rem;
  border-color: #181818;
  border-radius: 12px;
  gap: 8px;
  margin-block: 8px;
}

.sk_theme #sk_omnibarSearchResult ul li.focused {
  background: #313244;
  border-color: #181818;
  border-radius: 12px;
  position: relative;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
}

#sk_omnibarSearchArea>input {
  display: inline-block;
  width: 100%;
  flex: 1;
  font-size: 20px;
  padding: 16px;
  background: transparent;
  border-style: none;
  outline: none;
  padding-left: 18px;
}

#sk_omnibarSearchArea>.prompt>.separator {
  display: none;
}

#sk_omnibarSearchArea>.prompt:before {
  content: "> ";
}

/* ---------- Tab hint ---------- */
#sk_tabs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: auto;
  z-index: 2147483000;
}

div.sk_tab {
  display: flex;
  height: 28px;
  width: 202px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 5px;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#232136), color-stop(100%,#232136));
  box-shadow: 0px 3px 7px 0px #2a283e;
}

div.sk_tab_wrap {
  display: inline-block;
  flex: 1;
}

div.sk_tab_icon {
  display: inline-block;
  vertical-align: middle;
}

div.sk_tab_icon>img {
  width: 18px;
}

div.sk_tab_title {
  width: 150px;
  display: inline-block;
  vertical-align: middle;
  font-size: 10pt;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 5px;
  color: #e0def4;
}

div.sk_tab_url {
  font-size: 10pt;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #c4a7e7;
}

div.sk_tab_hint {
  display: inline-block;
  float:right;
  font-size: 10pt;
  font-weight: bold;
  padding: 0px 2px 0px 2px;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#232136), color-stop(100%,#232136));
  color: #e0def4;
  border: solid 1px #56526e;
  border-radius: 3px;
  box-shadow: #2a283e;
}

#sk_tabs.vertical div.sk_tab_hint {
    position: fixed;
    left: auto;
    color: darkorange;
}

#sk_usage,
#sk_popup,
#sk_editor {
  overflow: auto;
  position: fixed;
  width: 80%;
  max-height: 80%;
  top: 10%;
  left: 10%;
  text-align: left;
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
  z-index: 2147483298;
  padding: 1rem;
  border: 1px solid #282828;
  border-radius: 10px;
}

div.tab_rocket {
  display: none;
}

#sk_keystroke {
  padding: 6px;
  position: fixed;
  float: right;
  bottom: 0px;
  z-index: 2147483000;
  right: 0px;
  background: #282828;
  color: #CDD6F4;
  border: 1px solid #181818;
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.8);
}

#sk_status {
  position: fixed;
  bottom: 0;
  z-index: 2147483000;
  padding: 8px 8px 4px 8px;
  border-radius: 5px;
  border: 1px solid #282828;
  font-size: 12px;
  box-shadow: 0px 20px 40px 2px rgba(0, 0, 0, 1);
  margin-bottom: 1rem;
}

/* ---------- ACE Editor ---------- */
#sk_editor {
  background:  #181825 !important;
  height: 50% !important;
}

.ace_dialog-bottom {
  border-top: 1px solid grey !important;
}

.ace-chrome .ace_print-margin,
.ace_gutter,
.ace_gutter-cell,
.ace_dialog {
  background: grey !important;
}

.ace-chrome {
  color: #cdd6f4 !important;
}

.ace_gutter,
.ace_dialog {
  color: #cdd6f4 !important;
}

.ace_cursor {
  color: #cdd6f4 !important;
}
`;

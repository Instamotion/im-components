# Tabs
Component for Tabs displaying 

## Installation
```bash
yarn add @im-ui/tabs
```

## Usage
<Tabs> components will map all the props.children into Tabs and TabPanels
Every odd element will become Tab
Every even element will become TabPanel

!important: amount of props.children should be even, otherwise magic wont happen

```
<Tabs>
    <DummyTab>Finanzierung</DummyTab>
    <DummyPanel>Finanzierungsprozess description will be here</DummyPanel>

    <AnotherDummyTab>Barkauf</AnotherDummyTab>
    <AnotherDummyPanel>Kaufprozess description goes here</AnotherDummyPanel>
</Tabs>
```
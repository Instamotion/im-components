import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs as TabGroup, TabList, TabPanel } from 'react-tabs';

export interface TabsProps {
  children?: React.ReactNode;
  className?: string;
}

const TabsWrap = styled.div`
  .react-tabs {
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    margin: 0;
    padding: 0;
  }

  .react-tabs__tab {
    display: inline-block;
    position: relative;
    list-style: none;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    font-weight: bold;
  }

  .react-tabs__tab--disabled {
    cursor: default;
  }

  .react-tabs__tab:focus {
    outline: none;
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }
`;

const Tabs: React.FC<TabsProps> = ({ children, className }) => {
  if (React.Children.count(children) === 0) return <></>;

  const renderTabs = (children: React.ReactNode) => {
    const tabs: React.ReactNode[] = [];

    React.Children.toArray(children)
      .filter((_, index) => index % 2 === 0)
      .forEach(element => tabs.push(<Tab>{element}</Tab>));

    return tabs;
  };

  const renderTabPanels = (children: React.ReactNode) => {
    const tabPanels: React.ReactNode[] = [];

    React.Children.toArray(children)
      .filter((_, index) => index % 2 != 0)
      .forEach(element => tabPanels.push(<TabPanel>{element}</TabPanel>));

    return tabPanels;
  };

  return (
    <TabsWrap className={className}>
      <TabGroup>
        <TabList>{renderTabs(children)}</TabList>
        {renderTabPanels(children)}
      </TabGroup>
    </TabsWrap>
  );
};

export default Tabs;

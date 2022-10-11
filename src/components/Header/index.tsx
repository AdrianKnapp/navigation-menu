import {
  Container,
  SubTabContainer,
  SubTabWrapper,
  TabContainer,
  TabHeaderContainer
} from './Header.styles';
import { headerMock } from '@__mocks__/header.mock';
import { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState<null | number>(null);
  const [activeSubTab, setActiveSubTab] = useState<null | number>(null);

  const getTabHeader = (item: any, tabHeaderIndex: number) => {
    return (
      <TabHeaderContainer
        className={activeTab === tabHeaderIndex ? 'active' : 'hidden'}
        onMouseEnter={() => setActiveTab(tabHeaderIndex)}
      >
        <ul>
          {item.items.map(
            (item: { name: string; items: string[] }, subTabIndex: number) => {
              return (
                <li
                  onMouseEnter={() => setActiveSubTab(subTabIndex)}
                  onMouseOut={() => setActiveSubTab(null)}
                  className={activeSubTab === subTabIndex ? 'selected' : ''}
                  key={item.name}
                >
                  {item.name}
                </li>
              );
            }
          )}
        </ul>
      </TabHeaderContainer>
    );
  };

  const getSubTab = (
    brands: { name: string; items: string[] }[],
    headerIndex: number
  ) => {
    return (
      <SubTabWrapper>
        {brands.map((brand, index) => {
          const { items: brandItems } = brand;

          return brandItems.length ? (
            <SubTabContainer
              className={
                activeSubTab === index && activeTab === headerIndex
                  ? 'active'
                  : 'hidden'
              }
              onMouseEnter={() => setActiveSubTab(index)}
            >
              <ul>
                {brandItems.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </SubTabContainer>
          ) : null;
        })}
      </SubTabWrapper>
    );
  };

  const getTab = () => {
    return headerMock.items.map((item, index) => {
      const { items: brands } = item;

      return (
        <TabContainer
          onMouseLeave={() => {
            setActiveTab(null);
          }}
        >
          {getTabHeader(item, index)}
          {getSubTab(brands, index)}
        </TabContainer>
      );
    });
  };

  return (
    <Container>
      <ul>
        {headerMock.items.map((item, index) => {
          return (
            <li
              onMouseEnter={() => setActiveTab(index)}
              onMouseLeave={() => setActiveTab(null)}
              key={item.name}
              className={activeTab === index ? 'selected' : ''}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      {getTab()}
    </Container>
  );
};

export default Header;

import styled, { css } from "styled-components";

const tabAnimation = css`
  transition: all 0.6s ease;

  ul {
    transition: all 0.6s ease;
  }

  &.hidden {
    max-height: 0;
    pointer-events: none;

    ul {
      opacity: 0;
    }
  }

  &.active {
    pointer-events: auto;
    max-height: 2000px;
    z-index: 80;

    ul {
      opacity: 1;
    }
  }
`;

export const ContainerStyles = styled.div`
  width: 100%;
  font-size: 1.2rem;

  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
    min-height: 5rem;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 1rem;
      border-bottom: 3px solid transparent;

      &.selected {
        border-bottom: 3px solid black;
      }
    }
  }
`;

export const Container = styled(ContainerStyles)`
  background-color: #fff;
`;

export const TabContainer = styled(ContainerStyles)`
  position: absolute;

  display: flex;
  flex-direction: column;
`;

export const TabHeaderContainer = styled(ContainerStyles)`
  ${tabAnimation};

  &.active {
    z-index: 100;
  }

  background-color: #fff;
  position: relative;
`;

export const SubTabWrapper = styled.div`
  position: relative;
`;

export const SubTabContainer = styled(ContainerStyles)`
  ${tabAnimation};

  background-color: #fff;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
  }
`;

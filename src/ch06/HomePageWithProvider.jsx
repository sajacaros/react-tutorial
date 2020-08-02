import React, { PureComponent } from 'react';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import ButtonWithContext from './ButtonWithContext';
import LoadingProvider from './LoadingProvider';
import Button from '../ch04/Button';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithContext>버튼</ButtonWithContext>;
}

function RowDCComponent() {
  return <ButtonWithLoadingContext label="버튼" />;
}

function TableComponent() {
  return (
    <div>
      <RowBComponent />
      <RowCComponent />
      <RowDCComponent />
    </div>
  );
}

class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext label="상태 변경" />
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;

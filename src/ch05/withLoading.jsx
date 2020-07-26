import React from 'react';

export default function (loadingMessage = '로딩 중') {
  return function withLoading(WrappedCompnent) {
    const { displayName, name: componentName } = WrappedCompnent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessage;
      return <WrappedCompnent {...otherProps} />;
    }

    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}
// import React from 'react';

// export default (loadingMessage = '로딩중') => (WrappedComponent) => {
//   const { displayName, name: componentName } = WrappedComponent;
//   const wrappedComponentName = displayName || componentName;

//   function WithLoading({ isLoading, ...props }) {
//     if (isLoading) {
//       return loadingMessage;
//     }

//     return <WrappedComponent {...props} />;
//   }
//   WithLoading.displayName = `withLoading(${wrappedComponentName})`;
//   return WithLoading;
// };

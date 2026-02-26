import styles from './NameTags.module.css';

export const withGreenTheme = (WrappedComponent) => {
  return (props) => {
    // We inject the 'green-override' class automatically
    return (
      <WrappedComponent 
        {...props} 
        className={styles['green-override']} 
      />
    );
  };
};
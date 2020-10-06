import React, { useRef, useState, useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledNoOptionsListItem
} from "./styles";

const defaultOptions = [];

const ListOptions = ({ filteredOptions, onClick }) =>
  filteredOptions.map(({ label, value }) => (
    <StyledListItem key={value} onClick={() => onClick({ value, label })}>
      {label}
    </StyledListItem>
  ));

const NoOptions = ({ onClick }) => (
  <StyledNoOptionsListItem onClick={() => onClick({ value: "", label: "" })}>
    No Options
  </StyledNoOptionsListItem>
);

const withAutoComplete = WrappedComponent => props => {
  const {
    name,
    errorName,
    fullWidth,
    options = defaultOptions,
    onChange = () => {},
    onInputChange = () => {}
  } = props;

  const { register, watch, setValue, trigger } = useFormContext();

  register({ name });

  const selectValue = watch(name);

  const containerRef = useRef(null);

  const [listOpen, setListOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [inputValue, setInputValue] = useState(
    options.find(({ value }) => value === selectValue)?.label || ""
  );

  const validate = useCallback(async () => trigger(errorName || name), [
    trigger,
    name,
    errorName
  ]);

  const adjustValues = useCallback(() => {
    setFilteredOptions(options);
    setInputValue(
      options.find(({ value }) => value === selectValue)?.label || ""
    );
  }, [options, selectValue]);

  useEffect(() => {
    adjustValues();
  }, [adjustValues]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        listOpen
      ) {
        e.preventDefault();
        e.stopPropagation();
        validate();
        setListOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [containerRef, trigger, name, listOpen, validate]);

  const handleInputChange = e => {
    setValue(name, "");
    setInputValue(e.target.value);
    setFilteredOptions(
      options.filter(({ label }) =>
        label.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    onInputChange(e.target.value);
  };

  const handleListItemClicked = ({ value, label }) => {
    setValue(name, value);
    adjustValues();
    validate();
    onChange({ label, value });
    setListOpen(false);
  };

  return (
    <StyledContainer ref={containerRef} fullWidth={fullWidth}>
      <WrappedComponent
        {...props}
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setListOpen(true)}
      />
      {listOpen && (
        <StyledList fullWidth={fullWidth}>
          {filteredOptions.length ? (
            <ListOptions
              filteredOptions={filteredOptions}
              onClick={handleListItemClicked}
            />
          ) : (
            <NoOptions onClick={handleListItemClicked} />
          )}
        </StyledList>
      )}
    </StyledContainer>
  );
};

export default withAutoComplete;

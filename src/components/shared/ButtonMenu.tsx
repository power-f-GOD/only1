import { useMemo, useState, useCallback, memo, FC } from 'react';

import {
  IconButton,
  Button,
  Menu,
  MenuItem,
  ExtendButtonBase,
  ButtonTypeMap,
  IconButtonTypeMap,
  MenuProps,
  MenuItemTypeMap
} from '@mui/material';
import { theme } from 'src/utils';
import { MuiButtonProps, Options } from 'src/types';
import { SVGIcon } from './SVG.Icons';

const _ButtonMenu: FC<{
  buttonProps?: MuiButtonProps;
  menuProps?: MenuProps;
  menuItemProps?: MenuItemTypeMap['props'];
  buttonConstantContent?: string | number | JSX.Element;
  buttonClassName?: string;
  options: Options;
  buttonType?: 'flat-button' | 'icon-button';
}> = ({
  buttonProps,
  buttonType,
  buttonConstantContent,
  buttonClassName,
  menuProps,
  menuItemProps,
  options
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState(options[0].value || '- Select -');
  const open = !!anchorEl;
  const ButtonComponent =
    buttonType === 'icon-button'
      ? IconButton
      : (Button as ExtendButtonBase<ButtonTypeMap> & ExtendButtonBase<IconButtonTypeMap>);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const renderOptions = useCallback(
    (option) => (
      <MenuItem
        {...(menuItemProps || {})}
        key={option.value}
        onClick={() => {
          handleClose();
          setSelectedOption(option?.value || '');
        }}>
        {typeof option.icon === 'string' ? <SVGIcon name={option.icon} /> : option.icon}
        {option.value}
      </MenuItem>
    ),
    [handleClose, menuItemProps]
  );

  return (
    <>
      <ButtonComponent
        {...(buttonProps || {})}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color={buttonProps?.color || 'primary'}
        sx={useMemo(
          () => ({ color: buttonProps?.color || theme.palette.grey[900] }),
          [buttonProps?.color]
        )}
        className={`text-capitalize ${buttonClassName || ''}`}>
        {buttonConstantContent || selectedOption}
      </ButtonComponent>

      <Menu
        {...(menuProps || {})}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={useMemo(
          () => ({
            'aria-labelledby': 'basic-button'
          }),
          []
        )}
        anchorOrigin={useMemo(
          () => ({
            vertical: 'bottom',
            horizontal: 'right'
          }),
          []
        )}
        transformOrigin={useMemo(
          () => ({
            vertical: 'top',
            horizontal: 'right'
          }),
          []
        )}>
        {options.map(renderOptions)}
      </Menu>
    </>
  );
};

export const ButtonMenu = memo(_ButtonMenu);

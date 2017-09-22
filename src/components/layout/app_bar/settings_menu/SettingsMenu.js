import React, { Component } from 'react';
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';

const SettingsMenu = () => (
  <IconMenu icon='more_vert' position='topRight' menuRipple>
    <MenuItem value='invite' icon='people' caption='Invite' />
    <MenuItem value='open_in_app' icon='open_in_browser' caption='Open in app' />
    <MenuItem value='download' icon='get_app' caption='Download' />
    <MenuDivider />
    <MenuItem value='settings' icon='settings' caption='Settings' />
    <MenuItem value='logout' icon='power_settings_new' caption='Log out'/>
  </IconMenu>
);

export default SettingsMenu;

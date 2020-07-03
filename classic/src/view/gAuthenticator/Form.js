/**
 * Classe que define o form de "GAuthenticator"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 01/04/2016
 */
Ext.define('MBilling.view.gAuthenticator.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.gauthenticatorform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'username',
            fieldLabel: t('username'),
            readyOnly: true
        }, {
            xtype: 'statususercombo',
            name: 'googleAuthenticator_enable',
            fieldLabel: t('status'),
            allowBlank: true
        }, {
            vtype: 'numberfield',
            name: 'code',
            fieldLabel: t('Code'),
            hidden: true,
            maxLength: 6,
            minLength: 6,
            allowBlank: true
        }, {
            name: 'google_authenticator_key',
            fieldLabel: t('google_authenticator_key'),
            readyOnly: true,
            allowBlank: true,
            hidden: true
        }];
        me.callParent(arguments);
    }
});
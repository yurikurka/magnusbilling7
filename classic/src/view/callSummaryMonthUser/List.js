/**
 * Classe que define a lista de "CallSummary"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2020 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnussolution/magnusbilling7/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 17/08/2012
 */
Ext.define('MBilling.view.callSummaryMonthUser.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.callsummarymonthuserlist',
    store: 'CallSummaryMonthUser',
    initComponent: function() {
        var me = this;
        me.fieldSearch = App.user.isAdmin ? 'idUser.username' : '';
        me.buttonImportCsv = false
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.allowUpdate = false;
        me.allowDelete = false;
        me.columns = [{
            header: t('Month'),
            renderer: Ext.util.Format.dateRenderer('Y-m'),
            dataIndex: 'month',
            filter: {
                type: 'date',
                field: 'month',
                dateFormat: 'Ym'
            },
            flex: 3
        }, {
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 4,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Duration'),
            dataIndex: 'sessiontime',
            flex: 2
        }, {
            header: t('ALOC all calls'),
            dataIndex: 'aloc_all_calls',
            renderer: Helper.Util.formatsecondsToTime,
            flex: 3
        }, {
            header: t('Answered calls'),
            dataIndex: 'nbcall',
            flex: 3
        }, {
            header: t('Failed calls'),
            dataIndex: 'nbcall_fail',
            flex: 3
        }, {
            header: t('Buy price'),
            dataIndex: App.user.isAdmin ? 'buycost' : 'sessionbill',
            renderer: Helper.Util.formatMoneyDecimal,
            flex: 3,
            hidden: App.user.isClient,
            hideable: App.user.isAdmin
        }, {
            header: t('Sell price'),
            dataIndex: App.user.isAgent || App.user.isClientAgent ? 'agent_bill' : 'sessionbill',
            renderer: Helper.Util.formatMoneyDecimal,
            flex: 3
        }, {
            header: t('Markup'),
            dataIndex: 'lucro',
            renderer: Helper.Util.formatMoneyDecimal,
            flex: 3,
            hidden: App.user.isClient,
            hideable: App.user.isAdmin
        }, {
            header: t('ASR'),
            dataIndex: 'asr',
            renderer: Helper.Util.formatPorcente,
            flex: 3,
            hidden: App.user.isClient,
            hideable: App.user.isAdmin
        }];
        me.callParent(arguments);
    }
});
/**
 * Classe que define o panel de "Boleto"
 *
 * MagnusSolution.com <info@magnussolution.com>
 * 17/08/2012
 */
Ext.define('MBilling.view.didbuy.Module', {
    extend: 'Ext.form.Panel',
    alias: 'widget.didbuymodule',
    controller: 'did',
    resizable: false,
    autoShow: true,
    header: false,
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'form',
            reference: 'buydidPanel',
            margin: '10 10 10 10',
            autoShow: true,
            closable: false,
            resizable: false,
            bodyPadding: 10,
            defaultType: 'textfield',
            defaults: {
                labelAlign: 'right',
                labelWidth: 250,
                width: 280,
                allowBlank: false,
                msgTarget: 'side',
                enableKeyEvents: true,
                plugins: 'markallowblank',
                anchor: '100%'
            },
            items: [{
                xtype: 'didbuycombo',
                name: 'did',
                fieldLabel: t('Select a DID')
            }],
            bbar: [{
                text: t('Next'),
                tooltip: t('Next'),
                width: 100,
                glyph: icons.disk,
                handler: 'onBuyDid'
            }]
        }];
        me.callParent(arguments);
    }
});
$(function() {
  const cons = {
    class: {
      ACTIVE: 'active',
    },
    $: {
      ACTIVE: $('.active'),
      MENU_LEFT_SIDE_LI: $('#menu > .menu-left-side > li'),
      MENU_LEFT_SIDE_LI_A: $('#menu > .menu-left-side > li > a'),
      SECTION: $('.section')
    }
  };

  const func = {
    ClearActiveSection: () => {
      cons.$.MENU_LEFT_SIDE_LI_A.removeClass(cons.class.ACTIVE);
      cons.$.SECTION.hide();
    }
  }

  cons.$.MENU_LEFT_SIDE_LI.on('click', (e) => {
    const $TARGET_LINK = $(e.currentTarget);
    const $TARGET_LINK_ANCHOR = $(e.target);
    const TARGET_LINK_ID = $TARGET_LINK.data('target');

    func.ClearActiveSection();

    $('#' + TARGET_LINK_ID).fadeIn();
    $TARGET_LINK_ANCHOR.addClass(cons.class.ACTIVE);
  });
});

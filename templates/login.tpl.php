<div class="clef-login" style="display:none;">

    <?php if (isset($error['value'])) { ?>
    <div class="alert alert-error">
        <p><?php echo $error['value'] ?></p>
    </div>
    <?php } ?>

    <?php if ($clef_id) { ?>
    <input type="hidden" name="clef_id" value="<?php echo $clef_id ?>"/>
    <?php } ?>

    <div
        class="clef-button-to-render"
        data-app-id="<?php echo $app_id ?>"
        data-redirect-url="<?php echo $redirect_url ?>"
    ></div>
</div>

<link rel="stylesheet" href="<?php echo $style_url ?>">
<script type="text/javascript" src="<? echo CLEF_JS_URL ?>"></script>
<script type="text/javascript" src="<?php echo $script_url ?>"></script>
<script>new ClefLogin();</script>
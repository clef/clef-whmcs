<div class="contentpadded clef-connect">
  <div class="row">
    <div class="col60">
      <div class="header-container">
        <div class="page-header">
          <div class="styled_title"><h1>Clef</h1></div>
        </div>

        <p>Clef is a replacment for passwords that let's you log in by just holding up your phone. It makes your life easier — and keeps you much more secure.</p>
      </div>

      <div class="status-container row">
        <div class="col60">
          <div class="page-header">
            <h3>Your account status</h3>
          </div>
          {if $has_clef_account }
          <p>Your Clef account is currently <b class="status is-connected">connected</b>.</p>
          <form method="POST" action="{$systemurl}index.php?m=clef">
            <input type="hidden" name="action" value="disconnect">
            <input type="hidden" name="csrf_token" value="{$csrf_token}">
            <input type="submit" class="btn btn-danger" value="Disconnect Clef Account"></a>
          </form>
          {else}
          <p>Your account is currently <b class="status is-disconnected">disconnected</b>.</p>
          <div class="clef-button-container">
            <div
                class="clef-button"
                data-app-id="{$app_id}"
                data-redirect-url="{$systemurl}index.php?m=clef&state={$csrf_token}&action=connect"
                data-type="connect"
            ></div>
          </div>
          {/if}
        </div>
      </div>


    </div>
  </div>
</div>
<link rel="stylesheet" href="{$systemurl}{$style_path}">
<script type="text/javascript" src="{php} echo CLEF_JS_URL {/php}"></script>
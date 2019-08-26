<form >
  <div class="form-group">
    <label for="exampleInputEmail1">Valores</label>
    <input type="text" class="form-control" id="valoresInput" placeholder="" width="60%">
    <p class="mensagemP">Insira os valores separados por virgula Ex(2.2,5 / 3.4,8 / 4.3,5 / 5.7,2)</p>
  </div>
  <button type="button" class="btn btn-success" onclick="getValoresForCalculo()">Calculo completo</button>
</form>
<div id="respostas">
    <div id="tabeladiv"></div>
    <div id="tabela2div"></div>
</div>
<div class="calh3"><h3 id="calh3"></h3></div>
<div class="calculos">
  <div></div>
</div>
<?php

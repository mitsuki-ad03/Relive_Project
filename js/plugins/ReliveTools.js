//=============================================================================
// ReliveTools.js
//
//=============================================================================
// Copyright (c) 2018- tenten
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
/*:
 * @plugindesc Relive Live開発用の便利ツール
 * @author tenten
 * @target MZ

 * @help Relive Liveの開発に用いる個人用ツール

 * Ver1.0.0 初版作成
 * 
 * @command SavePlayerVector
 * @text プレイヤーのベクトルの保存
 * @desc 現在のプレイヤーのマップ番号と位置と向きを変数1,2,3,4に保存

 * @command GetoffDirection
 * @text 降りる向きの計算
 * @desc プレイヤーが椅子などから降りる向きを、変数4（乗った際の向き）から計算して変数4に返す
 */
//-----------------------------------------------------------------------------
const PLUGIN_NAME = "ReliveTools";

(() => {
    'use strict';
    PluginManager.registerCommand(PLUGIN_NAME, 'SavePlayerVector', args => {
        $gameVariables.setValue(1, $gameMap.mapId());
        $gameVariables.setValue(2, $gamePlayer.x);
        $gameVariables.setValue(3, $gamePlayer.y);
        $gameVariables.setValue(4, $gamePlayer.direction());
    });
    PluginManager.registerCommand(PLUGIN_NAME, 'GetoffDirection', args => {
        if($gameVariables.value(4)==2){
            $gameVariables.setValue(4, 8)
        }
        else if($gameVariables.value(4)==4){
            $gameVariables.setValue(4, 6)
        }
        else if($gameVariables.value(4)==6){
            $gameVariables.setValue(4, 4)
        }
        else if($gameVariables.value(4)==8){
            $gameVariables.setValue(4, 2)
        }
    });
})();
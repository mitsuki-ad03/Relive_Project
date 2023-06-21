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
 * 
 * コマンド一覧
 * SavePlayerPosition: 現在のプレイヤーの位置を変数1,2に保存
 * 
 * Ver1.0.0 初版作成
 * 
 * @command SavePlayerPosition
 * @text プレイヤーの現在位置の保存
 * @desc 現在のプレイヤーのマップ番号と位置を変数1,2,3に保存
 * 
 * @command SavePlayerDirection
 * @text プレイヤーの向きの保存
 * @desc 現在のプレイヤーの向きを変数4に保存
 */
//-----------------------------------------------------------------------------
const PLUGIN_NAME = "ReliveTools";

(() => {
    'use strict';
    PluginManager.registerCommand(PLUGIN_NAME, 'SavePlayerPosition', args => {
        $gameVariables.setValue(1, $gameMap.mapId());
        $gameVariables.setValue(2, $gamePlayer.x);
        $gameVariables.setValue(3, $gamePlayer.y);
    });
})();
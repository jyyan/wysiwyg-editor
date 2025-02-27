/*!
 * froala_editor v4.0.14 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2022 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (factory(global.FroalaEditor));
}(this, (function (FE) { 'use strict';

  FE = FE && FE.hasOwnProperty('default') ? FE['default'] : FE;

  /**
   * Traditional Chinese spoken in Taiwan.
   */
  FE.LANGUAGE['zh_tw'] = {
    translation: {
      // Place holder
      'Type something': "\u8F38\u5165\u4E00\u4E9B\u5167\u5BB9",
      // Basic formatting
      'Bold': '粗體',
      'Italic': '斜體',
      'Underline': '下劃線',
      'Strikethrough': '刪除線',
      // Main buttons
      'Insert': '插入',
      'Delete': '刪除',
      'Cancel': '取消',
      'OK': '好的',
      'Back': '上一步',
      'Remove': '刪除',
      'More': '更多',
      'Update': '更新',
      'Style': '樣式',
      // Font
      'Font Family': '字體家族',
      'Font Size': "字體大小",
      // Colors
      'Colors': '顏色',
      'Background': '背景',
      'Text': '文字',
      'HEX Color': '十六進制顏色',
      // Paragraphs
      'Paragraph Format': '段落格式',
      'Normal': '正常',
      'Code': '程式碼',
      'Heading 1': '標題1',
      'Heading 2': '標題2',
      'Heading 3': '標題3',
      'Heading 4': '標題4',
      // Style
      'Paragraph Style': '段落樣式',
      'Inline Style': '行內樣式(Inline Style)',
      // Alignment
      'Align': '對齊',
      'Align Left': '左對齊',
      'Align Center': "置中對齊",
      'Align Right': "置右對齊",
      'Align Justify': '分散對齊',
      'None': '没有',
      // Lists
      'Ordered List': '有序列表',
      'Unordered List': '無序列表',
      // Indent
      'Decrease Indent': '減少縮排',
      'Increase Indent': '增加縮排',
      // Links
      'Insert Link': "插入超連結",
      'Open in new tab': '在新標籤頁中打開',
      'Open Link': "開啟超連結",
      'Edit Link': "編輯超連結",
      'Unlink': "移除超連結",
      'Choose Link': "關閉超連結",
      // Images
      'Insert Image': '插入圖片',
      'Upload Image': '上傳圖片',
      'By URL': "透過 URL 上傳",
      'Browse': '檔案瀏覽',
      'Drop image': "拖曳上傳",
      'or click': '或點擊瀏覽檔案',
      'Manage Images': '管理圖片',
      'Loading': '載入中..',
      'Deleting': '刪除中...',
      'Tags': '標籤',
      'Are you sure? Image will be deleted.': "請問是否要移除圖片？",
      'Replace': '取代',
      'Uploading': '上傳中...',
      'Loading image': '載入圖片中...',
      'Display': '顯示',
      'Inline': "行內顯示",
      'Break Text': '斷開文字',
      'Alternative Text': '替換文字',
      'Change Size': '改變大小',
      'Width': '寬度',
      'Height': '高度',
      'Something went wrong. Please try again.': '發生錯誤，請重試。',
      'Image Caption': '圖片說明',
      'Advanced Edit': '進階編輯',
      // Video
      'Insert Video': '插入影片',
      'Embedded Code': '嵌入式程式碼',
      'Paste in a video URL': '貼上影片的網址',
      'Drop video': '刪除影片',
      'Your browser does not support HTML5 video.': '您的瀏覽器不支持 HTML5 影片。',
      'Upload Video': '上傳影片',
      // Tables
      'Insert Table': '插入表格',
      'Table Header': '表頭',
      'Remove Table': "移除表格",
      'Table Style': '表格樣式',
      'Horizontal Align': '水平對齊方式',
      'Row': '行',
      'Insert row above': '在上方插入',
      'Insert row below': '在下方插入',
      'Delete row': '刪除行',
      'Column': '欄',
      'Insert column before': "向左插入新欄位",
      'Insert column after': "向右插入新欄位",
      'Delete column': '刪除欄',
      'Cell': '單元格',
      'Merge cells': '合併單元格',
      'Horizontal split': '水平分割',
      'Vertical split': '垂直分割',
      'Cell Background': '單元格背景',
      'Vertical Align': '垂直對齊方式',
      'Top': "上方",
      'Middle': "中間",
      'Bottom': '底部',
      'Align Top': '靠上對齊',
      'Align Middle': "垂直置中對齊",
      'Align Bottom': '靠下對齊',
      'Cell Style': '單元格樣式',
      // Files
      'Upload File': '上傳文件',
      'Drop file': '拖入文件',
      // Emoticons
      'Emoticons': '表情符號',
      'Grinning face': "\u81C9\u4E0A\u7B11\u563B\u563B",
      'Grinning face with smiling eyes': "\u7B11\u563B\u563B\u7684\u81C9\uFF0C\u542B\u7B11\u7684\u773C\u775B",
      'Face with tears of joy': "\u81C9\u4E0A\u5E36\u8457\u559C\u6085\u7684\u6DDA\u6C34",
      'Smiling face with open mouth': "\u7B11\u81C9\u5F35\u958B\u5634",
      'Smiling face with open mouth and smiling eyes': "\u7B11\u81C9\u5F35\u958B\u5634\u5FAE\u7B11\u7684\u773C\u775B",
      'Smiling face with open mouth and cold sweat': '帶冷汗的張嘴微笑',
      'Smiling face with open mouth and tightly-closed eyes': "\u7B11\u81C9\u5F35\u958B\u5634\uFF0C\u7DCA\u7DCA\u9589\u8457\u773C\u775B",
      'Smiling face with halo': '帶光環微笑',
      'Smiling face with horns': '帶牛角的微笑',
      'Winking face': "\u7728\u773C\u8868\u60C5",
      'Smiling face with smiling eyes': "\u9762\u5E36\u5FAE\u7B11\u7684\u773C\u775B",
      'Face savoring delicious food': "\u9762\u5C0D\u54C1\u5690\u7F8E\u5473\u7684\u98DF\u7269",
      'Relieved face': '如釋重負',
      'Smiling face with heart-shaped eyes': "\u5FAE\u7B11\u7684\u81C9\uFF0C\u5FC3\u81DF\u5F62\u7684\u773C\u775B",
      'Smiling face with sunglasses': "\u7B11\u81C9\u592A\u967D\u93E1",
      'Smirking face': "\u9762\u5C0D\u9762\u5E36\u7B11\u5BB9",
      'Neutral face': '中性臉',
      'Expressionless face': '无表情的脸',
      'Unamused face': "\u4E00\u81C9\u4E0D\u5FEB\u7684\u81C9",
      'Face with cold sweat': "\u9762\u5C0D\u51B7\u6C57",
      'Pensive face': "\u6C89\u601D\u7684\u81C9",
      'Confused face': "\u9762\u5C0D\u56F0\u60D1",
      'Confounded face': "\u8A72\u6B7B\u7684\u81C9",
      'Kissing face': '接吻的脸',
      'Face throwing a kiss': '扔一个吻',
      'Kissing face with smiling eyes': '带着微笑的眼睛接吻的脸',
      'Kissing face with closed eyes': '閉眼接吻',
      'Face with stuck out tongue': '舌头伸出来的脸',
      'Face with stuck out tongue and winking eye': '眨眼吐舌\'',
      'Face with stuck out tongue and tightly-closed eyes': '脸上伸出舌头和眨眼的眼睛',
      'Disappointed face': '失望',
      'Worried face': '担心的脸',
      'Angry face': '生氣的',
      'Pouting face': '撅嘴',
      'Crying face': "\u54ED\u6CE3\u7684\u81C9",
      'Persevering face': "\u600E\u5948\u81C9",
      'Face with look of triumph': '胜利的脸',
      'Disappointed but relieved face': '失望但释然的脸',
      'Frowning face with open mouth': '皺眉',
      'Anguished face': '痛苦的脸',
      'Fearful face': '害怕',
      'Weary face': "\u9762\u5C0D\u53AD\u5026",
      'Sleepy face': '困了',
      'Tired face': '累了',
      'Grimacing face': '鬼脸',
      'Loudly crying face': '大声哭泣的脸',
      'Face with open mouth': '張開嘴',
      'Hushed face': "\u5B89\u975C\u7684\u81C9",
      'Face with open mouth and cold sweat': "\u9762\u5C0D\u5F35\u958B\u5634\uFF0C\u4E00\u8EAB\u51B7\u6C57",
      'Face screaming in fear': "\u9762\u5C0D\u5C16\u53EB\u5728\u6050\u61FC\u4E2D",
      'Astonished face': "\u9762\u5C0D\u9A5A\u8A1D",
      'Flushed face': '臉紅',
      'Sleeping face': "\u719F\u7761\u7684\u81C9",
      'Dizzy face': "\u9762\u5C0D\u7729",
      'Face without mouth': '沒有嘴的臉',
      'Face with medical mask': "\u9762\u5C0D\u91AB\u7642\u53E3\u7F69",
      // Line breaker
      'Break': '換行',
      // Math
      'Subscript': '下標',
      'Superscript': '上標',
      // Full screen
      'Fullscreen': '全螢幕',
      // Horizontal line
      'Insert Horizontal Line': '插入水平線',
      // Clear formatting
      'Clear Formatting': '清除格式',
      // Save
      'Save': '保存',
      // Undo, redo
      'Undo': '撤消',
      'Redo': '重做',
      // Select all
      'Select All': '全選',
      // Code view
      'Code View': 'HTML 原始碼',
      // Quote
      'Quote': '引用',
      'Increase': "增加縮排",
      'Decrease': "減少縮排",
      // Quick Insert
      'Quick Insert': '快速插入',
      // Spcial Characters
      'Special Characters': '特殊字符',
      'Latin': '拉丁',
      'Greek': '希臘語',
      'Cyrillic': '西里爾',
      'Punctuation': '標點',
      'Currency': '貨幣',
      'Arrows': '箭頭',
      'Math': '數學',
      'Misc': '雜項',
      // Print.
      'Print': '列印',
      // Spell Checker.
      'Spell Checker': '拼寫檢查器',
      // Help
      'Help': '幫助',
      'Shortcuts': '快捷鍵',
      'Inline Editor': '內聯編輯器',
      'Show the editor': '顯示編輯器',
      'Common actions': '常用操作',
      'Copy': '複製',
      'Cut': '切',
      'Paste': '貼上',
      'Basic Formatting': '基本格式',
      'Increase quote level': '增加报价水平',
      'Decrease quote level': '降低报价水平',
      'Image / Video': '圖像/影片',
      'Resize larger': '調整大小更大',
      'Resize smaller': '調整大小更小',
      'Table': '表格',
      'Select table cell': '選擇表單元格',
      'Extend selection one cell': '增加選中的單元格',
      'Extend selection one row': '增加選中的行',
      'Navigation': '導航',
      'Focus popup / toolbar': '焦點彈出/工具欄',
      'Return focus to previous position': '將焦點返回到上一個位置',
      // Embed.ly
      'Embed URL': '嵌入網址',
      'Paste in a URL to embed': '貼上要嵌入的網址',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': '複製貼上的內容來自微軟Word文件。你想保留格式還是移除它？',
      'Keep': '保留樣式',
      'Clean': '移除樣式',
      'Word Paste Detected': '檢測到貼上自 Word 的內容',
      // Character Counter
      'Characters': '總字數',
      // More Buttons
      'More Text': '更多文字',
      'More Paragraph': '更多段落',
      'More Rich': '更多元件',
      'More Misc': '更多選項'
    },
    direction: 'ltr'
  };

})));
//# sourceMappingURL=zh_tw.js.map

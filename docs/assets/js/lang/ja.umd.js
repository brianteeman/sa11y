
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 3.2.3
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Sa11yLangJa = factory());
})(this, (function () { 'use strict';

  /*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
  var ja = {
    // Japan
    strings: {
      LANG_CODE: 'ja',
      MAIN_TOGGLE_LABEL: 'アクセシビリティの確認',
      CONTAINER_LABEL: 'アクセシビリティチェッカー',
      ERROR: 'エラー',
      ERRORS: 'エラース',
      WARNING: '警告',
      WARNINGS: '注意事項',
      GOOD: '良い',
      ON: 'オン',
      OFF: 'オフ',
      ALERT_TEXT: 'アラート',
      ALERT_CLOSE: '閉じる',
      OUTLINE: 'ページ概要',
      TITLE: 'タイトル',
      ALT: 'ALT',
      IMAGES: '画像',
      EDIT: '編集',
      IMAGES_NOT_FOUND: '画像が見つかりません。',
      DECORATIVE: '装飾用',
      MISSING: '不足',
      PAGE_ISSUES: 'ページの問題',
      SETTINGS: '設定方法',
      CONTRAST: 'コントラスト',
      FORM_LABELS: 'フォームラベル',
      LINKS_ADVANCED: 'リンク集（上級者向け）',
      DARK_MODE: 'ダークモード',
      SHORTCUT_SCREEN_READER: '問題にスキップします。キーボードショートカットAlt S',
      SHORTCUT_TOOLTIP: '発行物へスキップ',
      NEW_TAB: '新しいタブを開く',
      LINKED: 'リンク済み',
      PANEL_HEADING: 'アクセシビリティチェック',
      PANEL_STATUS_NONE: 'エラーは見つかりませんでした。',
      PANEL_ICON_WARNINGS: 'の警告が見つかりました。',
      PANEL_ICON_TOTAL: 'が見つかりました。',
      NOT_VISIBLE_ALERT: '表示しようとしているアイテムは表示されていません。非表示になっているか、アコーディオンやタブコンポーネントの中に入っている可能性があります。以下はプレビューです：',
      ERROR_MISSING_ROOT_TARGET: '対象領域<code>%(root)</code>が存在しないため、全ページのアクセシビリティを確認しました。',
      HEADING_NOT_VISIBLE_ALERT: '見出しは表示されません。非表示になっていたり、アコーディオンやタブコンポーネントの中に入っていたりすることがあります。',
      SKIP_TO_PAGE_ISSUES: 'ページの先頭へ戻る',
      CONSOLE_ERROR_MESSAGE: '申し訳ありませんが、このページのアクセシビリティチェッカーに問題があります。<a href="%(link)">このフォーム</a>または<a href="%(link)">GitHub</a>で報告していただけませんでしょうか',

      // Dismiss
      PANEL_DISMISS_BUTTON: '%(dismissCount)棄却された警告を表示する。',
      DISMISS: '却下',
      DISMISSED: '解除された警告',
      DISMISS_REMINDER: '警告は<strong>一時的に</strong>解除されるだけですのでご注意ください。ブラウザの履歴とクッキーを削除すると、すべてのページで警告が解除された状態に戻ります。',

      // Export
      DATE: '日付',
      PAGE_TITLE: 'ページタイトル',
      RESULTS: '結果',
      EXPORT_RESULTS: '結果のエクスポート',
      GENERATED: '%(tool) で生成された結果。',
      PREVIEW: 'プレビュー',
      ELEMENT: '要素',
      PATH: 'パス',

      // Colour filters
      COLOUR_FILTER: 'カラーフィルター',
      PROTANOPIA: 'プロタノピア',
      DEUTERANOPIA: 'デューテラノピア',
      TRITANOPIA: 'トリタノピア',
      MONOCHROMACY: 'モノクロマシー',
      COLOUR_FILTER_MESSAGE: '他の色との識別が困難な要素がないか、確認する。',
      RED_EYE: '赤いブラインド。',
      GREEN_EYE: 'グリーンのブラインドです。',
      BLUE_EYE: 'ブルーブラインドです。',
      MONO_EYE: '赤、青、緑のブラインド。',
      COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'ハイコントラストモードでは、カラーフィルターは機能しません。',

      // Alternative text stop words
      SUSPICIOUS_ALT_STOPWORDS: [
        'イマージュ',
        'グラフィック',
        'がぞう',
        '写真',
      ],
      PLACEHOLDER_ALT_STOPWORDS: [
        'アルト',
        'イマージュ',
        '写真',
        'デコラティブ',
        '写真',
        'プレースホルダ',
        '待受画像',
        'スペーサ',
      ],
      PARTIAL_ALT_STOPWORDS: [
        'クリック',
        'ここをクリック',
        '続きはこちら',
        '詳しくはこちらをご覧ください',
        'をクリックしてください',
        'しらべあげる',
        'ここに詳述',
        'は、ここに詳述されています',
        'ダウンロード',
        'ダウンロードはこちら',
        'もっと詳しく知る',
        'はこちらからダウンロードしてください',
        'さがしだす',
        '詳細はこちら',
        'をご覧ください',
        '詳しくはこちら',
        '形容',
        'これ',
        'ここに',
        'インフォメーション',
        'リンク',
        '学ぶ',
        '詳しく知る',
        'をもっと知ることができます',
        'もっと詳しく見る',
        'ならう',
        'も',
        'もっと詳しく',
        'ページ',
        'ペーパー',
        '読み替える',
        '読む',
        'これを読む',
        '今',
        '本ページ',
        'このページをご覧ください',
        '本サイト',
        'このウェブサイトをご覧ください',
        'ビュー',
        '私たちを見る',
        'ウェブサイト',
      ],
      WARNING_ALT_STOPWORDS: [
        'ここをクリック',
      ],
      NEW_WINDOW_PHRASES: [
        '外形的',
        'ニュータブ',
        'ニューウィンドウ',
        'ポップアップ',
        'ポップアップ',
      ],
      FILE_TYPE_PHRASES: ['ドキュメント', 'スプレッドシート', '計算シート', '圧縮ファイル', 'アーカイブされたファイル', 'ワークシート', 'パワーポイント', 'プレゼンテーション', 'インストール', 'ビデオ', 'オーディオ', 'PDF', 'ピクシブ', 'ドック', 'ドックス', 'になる', 'エムピーディー', 'パップ', 'テキスト', 'プチプチ', 'エグゼ', 'ディーエムジー', 'レントゲン写真', 'ウィンドウズ', 'マコス', 'クサビ', 'エックスエル', 'エックスエルエックス', 'エムピーフォー', 'ムーブ', 'アビ', 'ビュッ'],
      LANG_READABILITY: '読みやすさ',
      LANG_AVG_SENTENCE: '1文あたりの平均単語数：',
      LANG_COMPLEX_WORDS: '複雑な言葉：',
      LANG_TOTAL_WORDS: '言葉です：',
      LANG_VERY_DIFFICULT: '非常に難しい',
      LANG_DIFFICULT: '難しい',
      LANG_FAIRLY_DIFFICULT: 'かなり難しい',
      LANG_GOOD: '良い',
      READABILITY_NO_P_OR_LI_MESSAGE: '読みやすさのスコアを計算することができません。段落 <code>&lt;p&gt;</code> またはリストコンテンツ <code>&lt;li&gt;</code> が見つかりませんでした。',
      READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: '読みやすさのスコアを計算するためのコンテンツが十分でない。',

      // Headings
      HEADING_NON_CONSECUTIVE_LEVEL: '非連続の見出しレベルが使用されました。見出しはレベルをスキップしたり、<strong>見出し%(prevLevel)</strong>から<strong {R}>見出し%(level)</strong>に移行することはありません。',
      HEADING_EMPTY: '空の見出しが見つかりました！修正するには、この行を削除するか、その形式を<strong {R}>見出し%(level)</strong>から<strong>通常</strong>または<strong>段落</strong>に変更してください。',
      HEADING_LONG: '見出しが長すぎます！見出しはコンテンツを整理し、構造を伝えるために使用されます。簡潔で情報量があり、他と区別される必要があります。見出しは160文字未満に保つようにしてください（1文を超えないでください）。<hr> <strong {B}>%(HEADING_LENGTH) 文字</strong>',
      HEADING_FIRST: 'ページの最初の見出しは通常、見出し1または見出し2にする必要があります。見出し1はメインコンテンツセクションの開始であり、ページ全体の目的を説明する主要な見出しです。<a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">見出しの構造</a>について詳しくはこちら。',
      HEADING_MISSING_ONE: '見出し1がありません。見出し1はメインコンテンツ領域の開始であり、ページ全体の目的を説明する主要な見出しです。<a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">見出しの構造</a>について詳しくはこちら。',
      HEADING_EMPTY_WITH_IMAGE: '見出しにテキストがありませんが、画像が含まれています。これが見出しでない場合は、その形式を<strong {R}>見出し%(level)</strong>から<strong>通常</strong>または<strong>段落</strong>に変更してください。それ以外の場合は、画像に装飾的でない alt テキストを追加してください。',
      PANEL_HEADING_MISSING_ONE: '見出し1がありません！',
      PANEL_NO_HEADINGS: '見出しが見つかりません。',

      // Links
      LINK_EMPTY: 'テキストのない空のリンクを削除してください。',
      LINK_EMPTY_LABELLEDBY: 'リンクには、空の<code>aria-labelledby</code>値またはページの他の要素の<code>id</code>値と一致しない<code>aria-labelledby</code>値があります。',
      LINK_EMPTY_LINK_NO_LABEL: 'スクリーンリーダーやその他の支援技術で見える識別可能なテキストを持たないリンクです。修正するには：<ul><li>リンク先を説明する簡潔なテキストを追加してください。</li><li><a href="https://a11y-101.com/development/icons-and-links">アイコンリンクやSVG</a>の場合、おそらく説明的なラベルが不足しています。</li><li>このリンクがコピー/貼り付けのバグによるエラーであると考える場合は、削除を検討してください。</li></ul>',
      LINK_LABEL: '<strong {B}>ラベル</strong> %(TEXT)',
      LINK_STOPWORD: 'コンテキストがない状況では、リンクテキストが十分に説明的ではないかもしれません：<strong {R}>%(ERROR)</strong> <hr> <strong>ヒント！</strong> リンクテキストは常に明確で、ユニークで、意味のあるものである必要があります。"ここをクリック"や"詳細を見る"などの一般的な言葉は避けてください。',
      LINK_BEST_PRACTICES: 'リンクテキストを置き換えることを検討してください：<strong {R}>%(ERROR)</strong> <hr> <ul><li>"ここをクリック"は多くの人がマウスを使用しないか、このウェブサイトをモバイルデバイスで表示している可能性があるため、マウスの操作に焦点を当てています。タスクに関連する別の動詞を使用することを検討してください。</li><li>補助技術には非表示にされていない限り、HTMLシンボルをコールツーアクションとして使用しないでください。</li></ul>',
      LINK_URL: 'リンクテキストとして使用される長く理解しにくいURLは、支援技術で理解するのが難しい場合があります。ほとんどの場合、URLの代わりに読みやすいテキストを使用する方が良いでしょう。短いURL（サイトのホームページなど）は問題ありません。<hr><strong>ヒント！</strong> リンクテキストは常に明確で、ユニークで、意味のあるものである必要があります。コンテキストがない状況でも理解できるようにしてください。',
      LINK_DOI: 'ウェブページやオンラインのみのリソースの場合、<a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APAスタイルガイド</a>は、作品のURLまたはDOIをタイトルにラップすることで説明的なリンクを使用することを推奨しています。リンクテキストとして使用される長く理解しにくいURLは、支援技術で理解するのが難しい場合があります。',

      // Links advanced
      NEW_TAB_WARNING: 'リンクが警告なしに新しいタブまたはウィンドウで開きます。これは、視覚的コンテンツを認識するのが難しい人々にとって特に混乱を招く可能性があります。さらに、誰かの体験を制御したり、代わりに決定したりするのは常に良い慣行ではありません。リンクテキスト内でリンクが新しいウィンドウで開くことを示してください。<hr> <strong>ヒント！</strong> ベストプラクティスを学ぶ：<a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">新しいブラウザウィンドウとタブでのリンクの開き方。</a>',
      FILE_TYPE_WARNING: 'リンクが警告なしにPDFやダウンロード可能なファイル（MP3、Zip、Word Docなど）を指しています。リンクテキスト内にファイルの種類を示してください。ファイルが大きい場合は、ファイルサイズを含めることを検討してください。<hr> <strong>例:</strong> 実行レポート（PDF、3MB）',
      LINK_IDENTICAL_NAME: 'リンクが他のリンクと同じテキストを持っていますが、異なるページを指しています。同じテキストを持つ複数のリンクは、スクリーンリーダーを使用する人々に混乱を招く可能性があります。<hr> 他のリンクと区別するために、次のリンクをより具体的にすることを検討してください：<strong {W}>%(TEXT)</strong>',

      // Images
      MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: '画像が周囲のテキストと一緒にリンクとして使用されていますが、alt属性は装飾用としてマークされる必要があります。',
      MISSING_ALT_LINK_MESSAGE: '画像がリンクとして使用されていますが、altテキストがありません！リンクがどこに向かうかを説明するaltテキストを確認してください。',
      MISSING_ALT_MESSAGE: 'altテキストがありません！画像が物語やムード、重要な情報を伝えている場合は、画像を説明してください。',
      LINK_ALT_HAS_FILE_EXTENSION: 'altテキスト内にファイルの拡張子が見つかりました。altテキストが画像のリンク先を説明しているかどうか、画像の文字通りの説明ではないことを確認してください。<hr> {ALT} {L} <strong {R}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'リンクされた画像内の記述のないまたはプレースホルダーのaltテキストが見つかりました。altテキストが画像のリンク先を説明していることを確認してください。<hr> {ALT} {L} <strong {R}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_SUS_ALT_MESSAGE: '支援技術はすでにこれが画像であることを示しているため、「<strong {W}>%(ERROR)</strong>」は冗長かもしれません。altテキストが画像のリンク先を説明していることを確認してください。<hr> {ALT} {L} <strong {W}>%(ALT_TEXT)</strong>',
      ALT_HAS_FILE_EXTENSION: 'altテキスト内にファイルの拡張子が見つかりました。画像が物語やムード、重要な情報を伝えている場合は、画像を説明してください。<hr> {ALT} <strong {R}>%(ALT_TEXT)</strong>',
      ALT_PLACEHOLDER_MESSAGE: '記述のないまたはプレースホルダーのaltテキストが見つかりました。次のaltテキストをより意味のあるものに置き換えてください。<hr> {ALT} <strong {R}>%(ALT_TEXT)</strong>',
      ALT_HAS_SUS_WORD: '支援技術はすでにこれが画像であることを示しているため、「<strong {W}>%(ERROR)</strong>」は冗長かもしれません。<hr> {ALT} <strong {W}>%(ALT_TEXT)</strong>',
      LINK_HIDDEN_FOCUSABLE: '<code>aria-hidden=&quot;true&quot;</code>を持つリンクですが、キーボードでフォーカスが可能です。冗長または重複したリンクを非表示にする場合は、<code>tabindex=&quot;-1&quot;</code>も追加してください。',
      LINK_IMAGE_NO_ALT_TEXT: '画像内のリンクが装飾用としてマークされており、リンクテキストがありません。リンクの目的を説明するaltテキストを画像に追加してください。',
      LINK_IMAGE_HAS_TEXT: '画像が装飾用としてマークされていますが、リンクが周囲のテキストを説明するラベルとして使用されています。',
      LINK_IMAGE_LONG_ALT: 'リンクされた画像のaltテキストの説明が<strong>長すぎます</strong>。リンクされた画像のaltテキストは、画像の文字通りの説明ではなく、リンクの目的を説明する必要があります。<strong>リンク先のページのタイトルをaltテキストとして使用することを検討してください。</strong> <hr> {ALT} {L} <strong {B}>%(altLength) 文字</strong> <strong {W}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_ALT_WARNING: '画像リンクにはaltテキストが含まれています。altテキストがリンク先を説明していますか？<strong>リンク先のページのタイトルをaltテキストとして使用することを検討してください。</strong> <hr> {ALT} {L} <strong {W}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_ALT_AND_TEXT_WARNING: '画像リンクには<strong>altテキストと周囲のリンクテキストの両方が含まれています。</strong> この画像が装飾用であり、他のページへの機能的なリンクとして使用されている場合は、画像を装飾用としてマークすることを検討してください。周囲のリンクテキストで十分です。<hr> {ALT} <strong {W}>%(ALT_TEXT)</strong> <hr> <strong {B}>ラベル</strong> {L} <strong {W}>%(TEXT)</strong>',
      IMAGE_FIGURE_DECORATIVE: '画像が<strong>装飾用</strong>としてマークされ、支援技術によって無視されます。<hr> キャプションが提供されていますが、ほとんどの場合、画像にはaltテキストも必要です。<ul><li>altテキストは画像の内容を簡潔に説明する必要があります。</li><li>キャプションは通常、画像を周囲のコンテンツに関連付けるための文脈を提供したり、特定の情報に注意を払ったりするために使用されます。</li></ul>詳細はこちら：<a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">altとfigcaptionの比較</a>。',
      IMAGE_FIGURE_DUPLICATE_ALT: 'altとキャプションテキストにはまったく同じ単語を使用しないでください。スクリーンリーダーは情報を二重に発表します。<ul><li>altテキストは画像の内容を簡潔に説明する必要があります。</li><li>キャプションは通常、画像を周囲のコンテンツに関連付けるための文脈を提供したり、特定の情報に注意を払ったりするために使用されます。</li></ul>詳細はこちら：<a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">altとfigcaptionの比較</a> <hr> {ALT} <strong {W}>%(ALT_TEXT)</strong>',
      IMAGE_DECORATIVE: '画像が<strong>装飾用</strong>としてマークされ、支援技術によって無視されます。画像が物語やムード、重要な情報を伝えている場合は、altテキストを追加してください。',
      IMAGE_ALT_TOO_LONG: 'altテキストの説明が<strong>長すぎます</strong>。altテキストは簡潔でありながら意味のあるものである必要があります（ツイートのように、約100文字）。これが複雑な画像やグラフの場合は、画像の長い説明を以下のテキストまたは折りたたみコンポーネントに入れることを検討してください。<hr> {ALT} <strong {B}>%(altLength) 文字</strong> <strong {W}>%(ALT_TEXT)</strong>',
      IMAGE_PASS: '{ALT} %(ALT_TEXT)',

      // Labels
      LABELS_MISSING_IMAGE_INPUT_MESSAGE: '画像ボタンにaltテキストがありません。アクセス可能な名前を提供するためにaltテキストを追加してください。例：<em>検索</em>または<em>送信</em>。',
      LABELS_INPUT_RESET_MESSAGE: 'リセットボタンは、特に必要な場合を除いて使用しないでください。間違って簡単にアクティブ化される可能性があります。<hr> <strong>ヒント！</strong> <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">リセットおよびキャンセルボタンが使用性の問題を引き起こす理由</a>を学んでください。',
      LABELS_ARIA_LABEL_INPUT_MESSAGE: '入力フィールドにはアクセス可能な名前がありますが、見えるラベルもあることを確認してください。<hr> <strong {B}>入力ラベル</strong> <strong {W}>%(TEXT)</strong>',
      LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'この入力フィールドに関連付けられたラベルがありません。この入力フィールドのラベルに一致する<code>for</code>属性を追加してください。<hr> この入力フィールドのIDは：<strong>id=&#34;%(id)&#34;</strong>',
      LABELS_MISSING_LABEL_MESSAGE: 'この入力フィールドに関連付けられたラベルがありません。この入力フィールドに<code>id</code>を追加し、ラベルに一致する<code>for</code>属性を追加してください。',

      // Embedded content
      EMBED_VIDEO: 'すべての動画に<strong>字幕を表示してください。</strong> 音声および動画コンテンツのすべてに字幕を提供することは、必須のレベルAの要件です。字幕は、聴覚障害者や難聴者をサポートします。',
      EMBED_AUDIO: 'すべてのポッドキャストに<strong>トランスクリプトを提供してください。</strong> 音声コンテンツのすべてにトランスクリプトを提供することは、必須のレベルAの要件です。トランスクリプトは、聴覚障害者や難聴者をサポートしますが、誰にでも利益をもたらすことがあります。トランスクリプトを下部に配置するか、アコーディオンパネル内に配置することを検討してください。',
      EMBED_DATA_VIZ: 'このようなデータ可視化ウィジェットは、キーボードやスクリーンリーダーを使用してナビゲートする人々や、視力が低い人々や色覚異常の人々にとって問題が発生することがよくあります。ウィジェットの下に代替（テキストまたは表）形式で同じ情報を提供することが推奨されています。<hr> <a href="https://www.w3.org/WAI/tutorials/images/complex">複雑な画像</a>について詳しく学びます。',
      EMBED_MISSING_TITLE: '埋め込みコンテンツには、その内容を説明するアクセス可能な名前が必要です。 <code>iframe</code>要素にユニークな<code>title</code>または<code>aria-label</code>属性を提供してください。<a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames</a>について詳しく学びます。',
      EMBED_GENERAL_WARNING: '埋め込みコンテンツを確認できません。画像にはaltテキスト、動画には字幕、テキストには十分なコントラスト、対話型コンポーネントには<a href="https://webaim.org/techniques/keyboard/">キーボードアクセス可能性</a>があることを確認してください。',
      EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code>にフォーカス可能な要素が含まれている場合、<code>tabindex="-1"</code>を持つべきではありません。埋め込みコンテンツはキーボードでアクセスできません。',

      // QA
      QA_BAD_LINK: '悪いリンクが見つかりました。リンクは開発環境を指しているようです。<hr> このリンクの先は：<br> <strong {R}>%(LINK)</strong>',
      QA_BAD_ITALICS: '太字および斜体タグには意味があり、段落全体を強調表示するために使用してはいけません。<strong>強調</strong>するためには、太字が使用されるべきです。斜体は固有名詞（つまり、書籍や記事のタイトル）、外国語、引用を強調するために使用されるべきです。長い引用は引用ブロックとしてフォーマットする必要があります。',
      QA_PDF: 'PDFのアクセシビリティをチェックできません。PDFはWebコンテンツと見なされ、アクセシブルにする必要があります。PDFには、スクリーンリーダーを使用する人や視力が低い人向けの問題がよく含まれます（構造タグの欠落やフォームフィールドのラベルの欠落など）。<ul><li>これがフォームである場合は、代替としてアクセシブルなHTMLフォームを使用してください。</li><li>これが文書である場合は、Webページに変換してください。</li></ul>それ以外の場合は、<a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">Acrobat DCでのPDFのアクセシビリティを確認してください。</a>',
      QA_DOCUMENT: '文書のアクセシビリティをチェックできません。リンクされた文書はWebコンテンツと見なされ、アクセシブルにする必要があります。この文書を手動で確認してください。<ul><li><a href="https://support.google.com/docs/answer/6199477?hl=en">Google Workspaceドキュメントやプレゼンテーションをよりアクセシブルにする方法</a></li><li><a href="https://support.microsoft.com/en-us/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office文書をよりアクセシブルにする方法</a></li></ul>',
      QA_PAGE_LANGUAGE: 'ページ言語が宣言されていません！<a href="https://www.w3.org/International/questions/qa-html-language-declarations">HTMLタグで言語を宣言してください。</a>',
      QA_PAGE_TITLE: 'ページタイトルがありません！<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">ページタイトルを入力してください。</a>',
      QA_BLOCKQUOTE_MESSAGE: 'これは見出しですか？<strong {W}>%(TEXT)</strong><hr> ブロック引用は引用のためにのみ使用する必要があります。これが見出しである場合は、このブロック引用をセマンティックな見出し（例：見出し2または見出し3）に変更してください。',
      QA_FAKE_HEADING: 'これは見出しですか？<strong {W}>%(TEXT)</strong><hr> 太字や大きなテキストの行は見出しのように見えるかもしれませんが、スクリーンリーダーを使用している人はそれが重要であるかどうかを判断したり、その内容にジャンプしたりすることができません。太字や大きなテキストはセマンティックな見出し（見出し2から見出し6）を置き換えるべきではありません。',
      QA_SHOULD_BE_LIST: 'リストを作成しようとしていますか？可能なリスト項目が見つかりました：<strong {R}>%(firstPrefix)</strong> <hr> ブルレットまたは番号の書式設定ボタンを使用してセマンティックなリストを使用してください。セマンティックなリストを使用すると、支援技術が合計アイテム数やリスト内の各アイテムの相対位置などの情報を伝えることができます。<a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">セマンティックリスト</a>について詳しく学びます。',
      QA_UPPERCASE_WARNING: 'すべて大文字が見つかりました。一部のスクリーンリーダーはすべて大文字のテキストを略語と解釈し、各文字を個別に読み上げます。また、一部の人々はすべて大文字のテキストを読むのが難しく、それが叫んでいるように見えるかもしれません。',
      QA_DUPLICATE_ID: '重複した<strong>IDが見つかりました</strong>。重複したIDは、支援技術がコンテンツとの相互作用を試みる際に問題を引き起こすことが知られています。<hr> 次のIDを削除または変更してください：<strong {R}>%(id)</strong>',
      QA_TEXT_UNDERLINE_WARNING: '下線付きテキストはリンクと混同される可能性があります。<code>&lt;strong&gt;</code><strong>strong importance</strong><code>&lt;/strong&gt;</code>や<code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>など、異なるスタイルを使用してください。',
      QA_SUBSCRIPT_WARNING: '下付き文字および上付き文字の書式設定オプションは、テキストの位置を変更するためのものであるべきです。それは単にプレゼンテーションや外観の目的でのみ使用されるべきではありません。文章全体のフォーマットは読みにくさの問題を引き起こします。適切な使用例には、指数の表示、序数（たとえば4<sup>th</sup>）、化学式（例：H<sub>2</sub>O）などが含まれます。',
      QA_IN_PAGE_LINK: 'リンクが壊れた同じページのリンクです。リンクのターゲットはページ上のいずれの要素とも一致しません。',

      // Tables
      TABLES_MISSING_HEADINGS: 'テーブルヘッダーがありません！アクセシブルなテーブルには、ヘッダーセルとデータセルを示すHTMLマークアップが必要です。これにより、支援技術を使用する人々にコンテキストが提供されます。テーブルは表形式のデータのみに使用する必要があります。<hr> <a href="https://www.w3.org/WAI/tutorials/tables/">アクセシブルなテーブル</a>について詳しく学びます。',
      TABLES_SEMANTIC_HEADING: '見出し2や見出し3などのセマンティックな見出しは、コンテンツのセクションにのみ使用すべきです。HTMLテーブルでは<strong>使用しないでください</strong>。代わりに<code>&lt;th&gt;</code>要素を使用してテーブルの見出しを示します。<hr> <a href="https://www.w3.org/WAI/tutorials/tables/">アクセシブルなテーブル</a>について詳しく学びます。',
      TABLES_EMPTY_HEADING: '空のテーブルヘッダーが見つかりました！テーブルヘッダーは<strong>空にしてはいけません</strong>。行や列のヘッダーを指定して関係性を伝えることが重要です。これにより、支援技術を使用する人々にコンテキストが提供されます。テーブルは表形式のデータのみに使用する必要があります。<hr> <a href="https://www.w3.org/WAI/tutorials/tables/">アクセシブルなテーブル</a>について詳しく学びます。',

      // Contrast
      CONTRAST_ERROR: 'このテキストは背景との対比が不足しています。通常のテキストには対比比率が少なくとも4.5:1、大きなテキストには3:1以上である必要があります。<hr> <strong {B}>コントラスト比</strong> <strong {B}>%(RATIO)</strong> <strong {R}>%(TEXT)</strong>',
      CONTRAST_WARNING: 'このテキストの対比は不明であり、手動で確認する必要があります。テキストと背景が強い対比色を持つことを確認してください。通常のテキストには対比比率が少なくとも4.5:1、大きなテキストには3:1以上である必要があります。<hr> 確認してください：<strong {W}>%(TEXT)</strong>',
      CONTRAST_INPUT_ERROR: 'この入力内のテキストは背景との対比が不足しています。通常のテキストには対比比率が少なくとも4.5:1、大きなテキストには3:1以上である必要があります。<hr> <strong {B}>コントラスト比</strong> <strong {B}>%(RATIO)</strong>',
    },
  };

  return ja;

}));

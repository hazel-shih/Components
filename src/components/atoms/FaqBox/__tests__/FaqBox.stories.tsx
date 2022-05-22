import React from 'react';
import { storiesOf } from '@storybook/react';

import FaqBox, { Faq, FaqList } from 'components/atoms/FaqBox';

const stories = storiesOf('atoms/FaqBox', module);

const TestFaqList: FaqList = [
	{
		question: '我有問題，該如何聯繫設計師？',
		answer: '你可以在「設計館頁面」或「商品頁面」上，找到「聯絡設計師」的按鈕。',
	},
	{
		question: '如果我跟設計師的語言不同，應該如何與設計師溝通？',
		answer:
			'Pinkoi 站內信支援自動翻譯，你可以直接輸入中文送出訊息，如果還是無法理解設計師的訊息內容，請 聯繫我們 協助你與設計師溝通。',
	},
	{
		question: '商品放進購物車後，選擇寄往台灣地區卻沒有運送方式？',
		answer:
			'商品放入購物車後，收件國家/地區選擇台灣地區，運送方式想選擇以下方式，例如：7-11 取貨、全家取貨、宅配、快遞等，則需要符合條件。',
	},
	{
		question: '購買海外商品時，需要支付關稅嗎？關稅如何計算？',
		answer:
			'1. 商品從海外發貨，經過海關時有一定機率海關會依規定對貨物進行抽檢或收取稅金，屆時物流業者或海關會向收件人發出繳稅通知，相關稅金與費用由收件方負擔。 2. 關稅金額會在商品入關時，由當地海關計算金額，並以海關計算金額為準，因此 Pinkoi 團隊與設計師無法事先提供預估金額，再請知悉。',
	},
	{
		question: '禮物卡是什麼，如何購買？',
		answer:
			'想送禮，卻不知道該送什麼嗎？不如送張 禮物卡，讓對方盡情地挑選喜歡的東西吧！Pinkoi 的禮物卡內含購物金，只要在結帳時，輸入卡片上方的號碼便可抵扣等值消費金額，還附有紙卡讓你將想說的話寫上去送給對方，目前有 100 ～ 6000 元新台幣等不同面額的禮物卡，歡迎到 Pinkoi 官方設計館 選購喔！',
	},
];

stories.add('__faq', () => (
	<Faq
		question="使用 GMO 貨到後付款該怎麼出貨？"
		answer="GMO 貨到後付款是 Pinkoi 提供給日本客人的一種付款方式，並非特定的運送方式。
當設計師收到顯示「中華郵政（GMO 貨到後付款）」的訂單時，出貨時請比照一般訂單的出貨程序。並且請務必使用中華郵政 EMS 或是其他有提供追蹤編號的中華郵政寄送方式出貨。"
	/>
));
stories.add('__interactive', () => <FaqBox faqList={TestFaqList} />);

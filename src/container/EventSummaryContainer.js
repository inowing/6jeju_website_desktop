import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {Paths} from '../paths/index'

export default () => {
	
	const language = useSelector(state => state.language.current);
	
	//--------------------------------------------------------------------------------------
	const LANGUAGE_PACK = {
		kr: {
			css: "",
			title: "개회사",
			title2: "축사",
			name: "제주특별자치도지사 원희룡",
			name2: "대통령직속농어업농어촌특별위원회 위원장 정현찬"
		},
		en: {
			css: " language-en",
			title: "Welcome Address",
			title2: "Congratulatory message",
			name: "제주특별자치도지사 원희룡",
			name2: "대통령직속농어업농어촌특별위원회 위원장 정현찬"
		},
		cn: {
			css: " language-cn",
			title: "중국어",
			title2: "중국어",
			name: "제주특별자치도지사 원희룡",
			name2: "대통령직속농어업농어촌특별위원회 위원장 정현찬"
		},
		jp: {
			css: " language-jp",
			title: "일본어",
			title2: "일본어",
			name: "제주특별자치도지사 원희룡",
			name2: "대통령직속농어업농어촌특별위원회 위원장 정현찬"
		}
	}
	
	const current_pack = LANGUAGE_PACK[language] ? LANGUAGE_PACK[language] : LANGUAGE_PACK["kr"]
	//--------------------------------------------------------------------------------------
	
	const LANGUAGE_PATH = language !== '' ? `/${language}` : '';
	
	return (
		<section id="main_container1" className={current_pack.css}>
			<div className={"main_content1" + current_pack.css}>
				<table className="summary_table">
					<tr>
						<td className={"left_td"}>• 행 사 명</td>
						<td className={"right_td"}>제3회 6차산업제주국제박람회</td>
					</tr>
					<tr>
						<td className={"left_td"}>• 기      간</td>
						<td className={"right_td"}>2021년 8월 19일(목)~8월 22일(일)</td>
					</tr>
					<tr>
						<td className={"left_td"}>• 장      소</td>
						<td className={"right_td"}>제주국제컨벤션센터</td>
					</tr>
					<tr>
						<td className={"left_td"}>• 주      최</td>
						<td className={"right_td"}>제주특별자치도, 대통령직속 농어업 · 농어촌특별위원회, 6차산업제주국제박람회 조직위원회</td>
					</tr>
					<tr>
						<td className={"left_td"}>• 주      관</td>
						<td className={"right_td"}>제주농업농촌6차산업화지원센터, ㈜제주국제컨벤션센터, 제주의소리, 제주 CBS</td>
					</tr>
					<tr>
						<td className={"left_td"}>• 정      보</td>
						<td className={"right_td"}>공식 홈페이지</td>
					</tr>
				</table>
				<img className={"summary_image"} src={`${process.env.PUBLIC_URL}/img/summary_image.jpg`} alt="" />
				{/*<img src="" alt="" className="summary_image"/>*/}
			</div>
		
		</section>
	)
}
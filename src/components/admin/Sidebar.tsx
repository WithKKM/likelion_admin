import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import search from '../../img/community/search.svg';
import { useNavigate } from 'react-router';
import arrowup from '../../img/admin/Chevron_Up.svg';
import arrowdown from '../../img/admin/Chevron_Down.svg';

interface SideBarProps {
    onItemSelect: (item: string) => void;
    onSearch: (query: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onItemSelect, onSearch }) => {
    const [selectedTab, setSelectedTab] = useState<string>('공지사항');
    const [inputValue, setInputValue] = useState<string>('');
    const [showSubList, setShowSubList] = useState(false);

    const navigate = useNavigate();
    const goAlert = (): void => {
        navigate('recruitalert');
    };
    const goUser = (): void => {
        navigate('/admin');
    };
    const goBoard = (): void => {
        navigate('board');
    };

    function handleToggleSubList() {
        setShowSubList(prevState => !prevState);
    }

    return (
        <Wrapper showSubList={showSubList}>
            <Title>어드민</Title>
            <Content>
                <Tab
                    className="ParentTab"
                    $isSelected={selectedTab === '회원정보'}
                    onClick={goUser}
                >
                    회원정보
                </Tab>
                <Tab
                    className="ParentTab"
                    $isSelected={selectedTab === '모집알림'}
                    onClick={goAlert}
                >
                    모집알림
                </Tab>

                <div className="BoardBox">
                    <Tab
                        className="ParentBoard"
                        $isSelected={false}
                        onClick={() => {
                            handleToggleSubList();
                        }}
                    >
                        게시판{' '}
                        {showSubList ? (
                            <ArrowUp src={arrowup} />
                        ) : (
                            <ArrowDown src={arrowdown} />
                        )}
                    </Tab>
                    <div className="board" onClick={goBoard}>
                        {showSubList && (
                            <>
                                <div className="boardcontent">
                                    <Tab
                                        $isSelected={
                                            selectedTab === '전체 게시글'
                                        }
                                        onClick={() => {
                                            onItemSelect('전체 게시글');
                                            setSelectedTab('전체 게시글');
                                        }}
                                    >
                                        전체 게시글
                                    </Tab>
                                </div>
                                <Divider />
                                <div className="boardcontent">
                                    <SpecialTab
                                        $isSelected={selectedTab === '멋대중앙'}
                                        onClick={() => {
                                            onItemSelect('멋대중앙');
                                            setSelectedTab('멋대중앙');
                                        }}
                                    >
                                        멋대중앙
                                    </SpecialTab>
                                    <Tab
                                        $isSelected={selectedTab === '공지사항'}
                                        onClick={() => {
                                            onItemSelect('공지사항');
                                            setSelectedTab('공지사항');
                                        }}
                                    >
                                        공지사항
                                    </Tab>
                                    <Tab
                                        $isSelected={selectedTab === '질문건의'}
                                        onClick={() => {
                                            onItemSelect('질문건의');
                                            setSelectedTab('질문건의');
                                        }}
                                    >
                                        질문건의
                                    </Tab>
                                    <Tab
                                        $isSelected={selectedTab === '정보공유'}
                                        onClick={() => {
                                            onItemSelect('정보공유');
                                            setSelectedTab('정보공유');
                                        }}
                                    >
                                        정보공유
                                    </Tab>
                                </div>
                                <Divider />
                                <div className="boardcontent">
                                    <SpecialTab
                                        $isSelected={
                                            selectedTab === '자유게시판'
                                        }
                                        onClick={() => {
                                            onItemSelect('자유게시판');
                                            setSelectedTab('자유게시판');
                                        }}
                                    >
                                        자유게시판
                                    </SpecialTab>
                                    <Tab
                                        $isSelected={selectedTab === '팀원모집'}
                                        onClick={() => {
                                            onItemSelect('팀원모집');
                                            setSelectedTab('팀원모집');
                                        }}
                                    >
                                        팀원모집
                                    </Tab>
                                    <Tab
                                        $isSelected={selectedTab === '플젝모집'}
                                        onClick={() => {
                                            onItemSelect('플젝모집');
                                            setSelectedTab('플젝모집');
                                        }}
                                    >
                                        플젝모집
                                    </Tab>
                                    <Tab
                                        $isSelected={selectedTab === '플젝자랑'}
                                        onClick={() => {
                                            onItemSelect('플젝자랑');
                                            setSelectedTab('플젝자랑');
                                        }}
                                    >
                                        플젝자랑
                                    </Tab>
                                </div>
                                <Divider />
                                <div className="boardcontent">
                                    <SpecialTab
                                        $isSelected={
                                            selectedTab === '멋사 오버플로우'
                                        }
                                        onClick={() => {
                                            onItemSelect('멋사 오버플로우');
                                            setSelectedTab('멋사 오버플로우');
                                        }}
                                    >
                                        멋사 오버플로우
                                    </SpecialTab>
                                    <Tab
                                        $isSelected={selectedTab === '프론트'}
                                        onClick={() => {
                                            onItemSelect('프론트');
                                            setSelectedTab('프론트');
                                        }}
                                    >
                                        프론트
                                    </Tab>
                                    <Tab
                                        $isSelected={selectedTab === '백'}
                                        onClick={() => {
                                            onItemSelect('백');
                                            setSelectedTab('백');
                                        }}
                                    >
                                        백
                                    </Tab>
                                    <Tab
                                        $isSelected={selectedTab === '기획'}
                                        onClick={() => {
                                            onItemSelect('기획');
                                            setSelectedTab('기획');
                                        }}
                                    >
                                        기획
                                    </Tab>
                                    <Tab
                                        $isSelected={selectedTab === '디자인'}
                                        onClick={() => {
                                            onItemSelect('디자인');
                                            setSelectedTab('디자인');
                                        }}
                                    >
                                        디자인
                                    </Tab>
                                    <Tab
                                        $isSelected={selectedTab === '기타'}
                                        onClick={() => {
                                            onItemSelect('기타');
                                            setSelectedTab('기타');
                                        }}
                                    >
                                        기타
                                    </Tab>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Content>
            {/* <Divider />
                <Content>
                    <SubTitle>자유게시판</SubTitle>
                    <Tab
                        $isSelected={selectedTab === '정보공유2'}
                        onClick={() => {
                            onItemSelect('정보공유');
                            setSelectedTab('정보공유2');
                        }}
                    >
                        정보공유
                    </Tab>
                    <Tab
                        $isSelected={selectedTab === '팀원모집'}
                        onClick={() => {
                            onItemSelect('팀원모집');
                            setSelectedTab('팀원모집');
                        }}
                    >
                        팀원모집
                    </Tab>
                    <Tab
                        $isSelected={selectedTab === '플젝모집'}
                        onClick={() => {
                            onItemSelect('플젝모집');
                            setSelectedTab('플젝모집');
                        }}
                    >
                        플젝모집
                    </Tab>
                    <Tab
                        $isSelected={selectedTab === '플젝자랑'}
                        onClick={() => {
                            onItemSelect('플젝자랑');
                            setSelectedTab('플젝자랑');
                        }}
                    >
                        플젝자랑
                    </Tab>
                </Content>
                <Divider />
                <Content>
                    <SubTitle>멋사 오버플로우</SubTitle>
                    <Tab
                        $isSelected={selectedTab === '프론트'}
                        onClick={() => {
                            onItemSelect('프론트');
                            setSelectedTab('프론트');
                        }}
                    >
                        프론트
                    </Tab>
                    <Tab
                        $isSelected={selectedTab === '백'}
                        onClick={() => {
                            onItemSelect('백');
                            setSelectedTab('백');
                        }}
                    >
                        백
                    </Tab>
                    <Tab
                        $isSelected={selectedTab === '기획'}
                        onClick={() => {
                            onItemSelect('기획');
                            setSelectedTab('기획');
                        }}
                    >
                        기획
                    </Tab>
                    <Tab
                        $isSelected={selectedTab === '디자인'}
                        onClick={() => {
                            onItemSelect('디자인');
                            setSelectedTab('디자인');
                        }}
                    >
                        디자인
                    </Tab>
                    <Tab
                        $isSelected={selectedTab === '기타'}
                        onClick={() => {
                            onItemSelect('기타');
                            setSelectedTab('기타');
                        }}
                    >
                        기타
                    </Tab>
                </Content>
                <TextInput borderColor={inputValue !== '' ? '#FF7710' : '#D1D4D8'}>
                    <input
                        style={{ width: '100%', outline: 'none', border: 'none' }}
                        type="text"
                        placeholder=" 검색"
                        value={inputValue}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                onSearch(inputValue);
                            }
                        }}
                        onChange={e => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <img
                        style={{ marginLeft: '8px' }}
                        src={search}
                        onClick={() => onSearch(inputValue)}
                        alt="검색"
                    />
                </TextInput> */}
        </Wrapper>
    );
};

export default SideBar;

const Wrapper = styled.div<{ showSubList: boolean }>`
    width: 25.5%;
    padding-right: 24px;
    min-width: 150px;
    height: 90vh;
    margin: 0 auto;

    .ParentTab {
        padding-left: 12px;
    }

    .ParentBoard {
        padding-left: 12px;

        border-radius: 6px 6px 0px 0px;
        border: 1px;
        margin-bottom: 12px;
        ${props =>
            props.showSubList &&
            css`
                background: #212224;
                color: #ffffff;
            `}
    }

    .BoardBox {
        width: 144px;
        height: 655px;
        border-radius: 6px;
        margin-right: 8px;

        ${props =>
            props.showSubList &&
            css`
                border: 1px solid #dcdfe3;
            `}
    }

    .boardcontent {
        display: flex;
        flex-direction: column;
        padding-left: 12px;
    }
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    margin-bottom: 8px;
    padding-left: 12px;
`;

const SubTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    margin: 8px 0;
`;

const Tab = styled.div<{ $isSelected: boolean }>`
    font-size: 14px;
    font-weight: 500;
    color: var(--Grey-900, #212224);
    padding: 8px 0;
    cursor: pointer;

    ${props =>
        props.$isSelected &&
        css`
            color: var(--Orange-600, #ff7710);
            font-weight: 700;
        `}
`;

const ArrowUp = styled.img`
    width: 16px;
    height: 16px;
`;

const ArrowDown = styled.img`
    width: 16px;
    height: 16px;
`;

const SpecialTab = styled(Tab)<{ $isSelected: boolean }>`
    font-size: 16px;
    font-weight: 700;
    color: var(--Grey-900, #212224);
    padding: 8px 0;
    cursor: pointer;

    ${props =>
        props.$isSelected &&
        css`
            color: var(--Orange-600, #ff7710);
            font-weight: 700;
        `}
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 0;
`;

const Divider = styled.div`
    height: 1px;
    background-color: var(--Grey-400, #dcdfe3);
    width: 80%;
    margin: 15px;
`;

const TextInput = styled.div<{ borderColor: string }>`
    height: 40px;
    width: 80%;
    border-radius: 6px;
    border: 1px solid ${props => props.borderColor};
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
    margin-top: 16px;
    padding: 0 8px;
`;

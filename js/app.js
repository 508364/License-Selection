// 主应用逻辑

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeWizard();
    renderLicenses();
    initializeSearchAndFilter();
    renderLicenseCheckboxes();
    initializeLicenseDownload();
    initializeBackToTop();
    initializeNavLinks();
});

// 向导控制
window.startWizard = function() {
    // 隐藏初始状态，显示向导步骤
    document.querySelector('.wizard-initial').style.display = 'none';
    document.querySelector('.wizard-container').style.display = 'block';
    // 重新初始化向导
    initializeWizard();
};

window.resetWizard = function() {
    // 重置所有单选按钮
    document.querySelectorAll('.wizard-container input[type="radio"]').forEach(input => {
        input.checked = false;
    });
    // 重置向导到初始状态
    document.querySelector('.wizard-container').style.display = 'none';
    document.querySelector('.wizard-initial').style.display = 'block';
};

// 初始化选择向导
function initializeWizard() {
    let currentStep = 1;
    const totalSteps = 5;
    
    // 监听选项变化
    document.querySelectorAll('.step-content input[type="radio"]').forEach(input => {
        input.addEventListener('change', function() {
            // 启用下一步按钮
            document.querySelector('.wizard-controls .btn-primary').disabled = false;
        });
    });
    
    window.prevStep = function() {
        if (currentStep > 1) {
            currentStep--;
            updateWizardStep(currentStep);
        }
    };
    
    window.nextStep = function() {
        // 检查当前步骤是否已选择
        const currentContent = document.querySelector(`.step-content.active`);
        const selectedOption = currentContent.querySelector('input[type="radio"]:checked');
        
        if (!selectedOption && currentStep <= totalSteps) {
            alert('请选择一个选项！');
            return;
        }
        
        if (currentStep < totalSteps) {
            currentStep++;
            updateWizardStep(currentStep);
        } else if (currentStep === totalSteps) {
            // 显示结果
            showRecommendation();
            currentStep++;
        }
    };
    
    function updateWizardStep(step) {
        // 更新步骤指示器
        document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.step-content').forEach(c => c.classList.remove('active'));
        
        if (step <= totalSteps) {
            document.querySelector(`.step[data-step="${step}"]`).classList.add('active');
            document.querySelector(`.step-content[data-step="${step}"]`).classList.add('active');
            
            // 更新控制按钮
            document.querySelector('.wizard-controls .btn-secondary').disabled = step === 1;
            document.querySelector('.wizard-controls .btn-primary').textContent = '下一步';
            document.querySelector('.wizard-controls .btn-primary').disabled = true;
        } else {
            document.querySelector('.step-content[data-step="result"]').classList.add('active');
            document.querySelector('.wizard-controls .btn-secondary').disabled = true;
            document.querySelector('.wizard-controls .btn-primary').textContent = '重新开始';
            document.querySelector('.wizard-controls .btn-primary').onclick = restartWizard;
        }
    }
    
    function showRecommendation() {
        // 获取用户选择
        const useCase = document.querySelector('input[name="use-case"]:checked')?.value;
        const commercial = document.querySelector('input[name="commercial"]:checked')?.value;
        const modify = document.querySelector('input[name="modify"]:checked')?.value;
        const sharealike = document.querySelector('input[name="sharealike"]:checked')?.value;
        const publicDomain = document.querySelector('input[name="public-domain"]:checked')?.value;
        
        // 简单的推荐算法
        let recommendedLicenses = [];
        
        if (publicDomain === 'yes') {
            // 放弃所有权利
            if (useCase === 'software') {
                recommendedLicenses.push('unlicense');
                recommendedLicenses.push('cc0-1.0');
            } else {
                recommendedLicenses.push('cc0-1.0');
            }
        } else {
                // 软件场景下使用开源软件许可证选择决策树
                if (useCase === 'software') {
                    // 是否要求衍生作品开源？
                    if (sharealike === 'yes') {
                        // 是否适用于网络服务？
                        // 简单处理：这里假设用户选择了网络服务
                        // 在实际应用中，可能需要添加一个额外的步骤
                        recommendedLicenses.push('agpl-3.0');
                        recommendedLicenses.push('gpl-3.0');
                        recommendedLicenses.push('lgpl-3.0');
                        recommendedLicenses.push('mpl-2.0');
                    } else {
                        // 是否需要明确的专利保护？
                        // 简单处理：根据使用场景判断
                        if (useCase === 'software') {
                            recommendedLicenses.push('apache-2.0');
                            recommendedLicenses.push('mulanpsl-2.0');
                            recommendedLicenses.push('mulanpsl-1.0');
                        } else {
                            recommendedLicenses.push('mit');
                            recommendedLicenses.push('bsd-3-clause');
                            recommendedLicenses.push('bsd-2-clause');
                        }
                    }
                } else {
                    // 内容场景下使用CC许可证选择决策树
                    if (commercial === 'yes') {
                        if (modify === 'yes') {
                            if (sharealike === 'yes') {
                                recommendedLicenses.push('cc-by-sa');
                            } else {
                                recommendedLicenses.push('cc-by');
                            }
                        } else {
                            recommendedLicenses.push('cc-by-nd');
                        }
                    } else {
                        if (modify === 'yes') {
                            if (sharealike === 'yes') {
                                recommendedLicenses.push('cc-by-nc-sa');
                            } else {
                                recommendedLicenses.push('cc-by-nc');
                            }
                        } else {
                            recommendedLicenses.push('cc-by-nc-nd');
                        }
                    }
                }
        }
        
        // 显示推荐结果
        const resultContainer = document.getElementById('recommendationResult');
        const allLicensesList = [...licenses, ...ccLicenses];
        const recommendedLicenseObjects = allLicensesList.filter(license => 
            recommendedLicenses.includes(license.id)
        );
        
        let resultHtml = '<h4>推荐许可证：</h4><ul>';
        recommendedLicenseObjects.forEach(license => {
            resultHtml += `<li>${license.name} ${license.version} - ${license.typeText}</li>`;
        });
        resultHtml += '</ul>';
        
        resultHtml += '<h4>许可证详情：</h4>';
        recommendedLicenseObjects.forEach(license => {
            resultHtml += `
                <div class="license-card" style="margin: 1rem 0; cursor: pointer;" onclick="selectLicenseForDownload('${license.id}');">
                    <div class="license-header">
                        <div class="license-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="license-name">${license.name} <span class="license-version">${license.version}</span></h4>
                            <span class="license-type ${license.type}">${license.typeText}</span>
                        </div>
                    </div>
                    <div class="license-meta">
                        <div class="license-meta-item">
                            <span class="license-meta-label">核心要求：</span>
                            <span class="license-meta-value">${license.coreRequirements}</span>
                        </div>
                        <div class="license-meta-item">
                            <span class="license-meta-label">共享要求：</span>
                            <span class="license-meta-value">${license.copyleft}</span>
                        </div>
                        <div class="license-meta-item">
                            <span class="license-meta-label">商业友好度：</span>
                            <span class="license-meta-value">${license.commercialFriendly}</span>
                        </div>
                    </div>
                    <p class="license-description">${license.适用场景}</p>
                </div>
            `;
        });
        
        resultContainer.innerHTML = resultHtml;
        
        // 切换到结果步骤
        updateWizardStep(totalSteps + 1);
    }
    
    window.restartWizard = function() {
        currentStep = 1;
        updateWizardStep(currentStep);
        
        // 重置所有选项
        document.querySelectorAll('.step-content input[type="radio"]').forEach(input => {
            input.checked = false;
        });
        
        // 重置控制按钮
        document.querySelector('.wizard-controls .btn-secondary').disabled = true;
        document.querySelector('.wizard-controls .btn-primary').textContent = '下一步';
        document.querySelector('.wizard-controls .btn-primary').onclick = nextStep;
        document.querySelector('.wizard-controls .btn-primary').disabled = true;
    };
}

// 渲染许可证列表
function renderLicenses(filteredLicenses = [...licenses, ...ccLicenses]) {
    const grid = document.getElementById('licensesGrid');
    
    grid.innerHTML = '';
    
    filteredLicenses.forEach(license => {
        const card = document.createElement('div');
        card.className = 'license-card';
        
        card.innerHTML = `
            <div class="license-header">
                <div class="license-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div>
                    <h3 class="license-name">${license.name} <span class="license-version">${license.version}</span></h3>
                    <span class="license-type ${license.type}">${license.typeText}</span>
                </div>
            </div>
            <div class="license-meta">
                <div class="license-meta-item">
                    <span class="license-meta-label">核心要求：</span>
                    <span class="license-meta-value">${license.coreRequirements}</span>
                </div>
                <div class="license-meta-item">
                    <span class="license-meta-label">共享要求：</span>
                    <span class="license-meta-value">${license.copyleft}</span>
                </div>
                <div class="license-meta-item">
                    <span class="license-meta-label">商业友好度：</span>
                    <span class="license-meta-value">${license.commercialFriendly}</span>
                </div>
            </div>
            <p class="license-description">${license.适用场景}</p>
        `;
        
        // 添加点击事件
        card.addEventListener('click', function() {
            selectLicenseForDownload(license.id);
        });
        
        // 添加悬停效果
        card.style.cursor = 'pointer';
        
        grid.appendChild(card);
    });
}

// 初始化搜索和过滤
function initializeSearchAndFilter() {
    const searchInput = document.getElementById('licenseSearch');
    const typeFilter = document.getElementById('licenseTypeFilter');
    
    function applyFilter() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedType = typeFilter.value;
        const allLicensesList = [...licenses, ...ccLicenses];
        
        const filtered = allLicensesList.filter(license => {
            const matchesSearch = license.name.toLowerCase().includes(searchTerm) ||
                                  license.version.toLowerCase().includes(searchTerm) ||
                                  license.typeText.toLowerCase().includes(searchTerm);
            
            const matchesType = selectedType === 'all' || license.type === selectedType;
            
            return matchesSearch && matchesType;
        });
        
        renderLicenses(filtered);
    }
    
    searchInput.addEventListener('input', applyFilter);
    typeFilter.addEventListener('change', applyFilter);
}

// 渲染许可证复选框用于比较
function renderLicenseCheckboxes() {
    const container = document.getElementById('licenseCheckboxes');
    const allLicensesList = [...licenses, ...ccLicenses];
    
    allLicensesList.forEach(license => {
        const checkboxItem = document.createElement('div');
        checkboxItem.className = 'license-checkbox-item';
        
        checkboxItem.innerHTML = `
            <input type="checkbox" id="compare-${license.id}" value="${license.id}">
            <label for="compare-${license.id}">${license.name} ${license.version}</label>
        `;
        
        container.appendChild(checkboxItem);
    });
}

// 比较许可证
window.compareLicenses = function() {
    const selectedCheckboxes = document.querySelectorAll('#licenseCheckboxes input[type="checkbox"]:checked');
    const selectedIds = Array.from(selectedCheckboxes).map(cb => cb.value);
    
    if (selectedIds.length < 2) {
        alert('请至少选择两个许可证进行比较！');
        return;
    }
    
    const allLicensesList = [...licenses, ...ccLicenses];
    const selectedLicenses = allLicensesList.filter(license => selectedIds.includes(license.id));
    
    const resultsContainer = document.getElementById('compareResults');
    
    // 创建比较表格
    let tableHtml = `
        <table class="compare-table">
            <thead>
                <tr>
                    <th>比较项</th>
    `;
    
    // 添加许可证列
    selectedLicenses.forEach(license => {
        tableHtml += `<th>${license.name} ${license.version}</th>`;
    });
    
    tableHtml += `
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>类型</td>
    `;
    
    selectedLicenses.forEach(license => {
        tableHtml += `<td>${license.typeText}</td>`;
    });
    
    tableHtml += `
                </tr>
                <tr>
                    <td>核心要求</td>
    `;
    
    selectedLicenses.forEach(license => {
        tableHtml += `<td>${license.coreRequirements}</td>`;
    });
    
    tableHtml += `
                </tr>
                <tr>
                    <td>传染性</td>
    `;
    
    selectedLicenses.forEach(license => {
        tableHtml += `<td>${license.copyleft}</td>`;
    });
    
    tableHtml += `
                </tr>
                <tr>
                    <td>商业友好度</td>
    `;
    
    selectedLicenses.forEach(license => {
        tableHtml += `<td>${license.commercialFriendly}</td>`;
    });
    
    tableHtml += `
                </tr>
                <tr>
                    <td>适用场景</td>
    `;
    
    selectedLicenses.forEach(license => {
        tableHtml += `<td>${license.适用场景}</td>`;
    });
    
    tableHtml += `
                </tr>
            </tbody>
        </table>
    `;
    
    resultsContainer.innerHTML = tableHtml;
};

// 初始化许可证下载
function initializeLicenseDownload() {
    const select = document.getElementById('licenseDownloadSelect');
    const authorInput = document.getElementById('authorName');
    const projectInput = document.getElementById('projectName');
    const yearInput = document.getElementById('year');
    const preview = document.getElementById('licensePreview');
    
    // 填充许可证选项
    const allLicensesList = [...licenses, ...ccLicenses];
    allLicensesList.forEach(license => {
        const option = document.createElement('option');
        option.value = license.id;
        option.textContent = `${license.name} ${license.version}`;
        select.appendChild(option);
    });
    
    // 更新预览
        function updatePreview() {
            const selectedId = select.value;
            const allLicensesList = [...licenses, ...ccLicenses];
            const license = allLicensesList.find(l => l.id === selectedId);
        
        if (license) {
            let previewText = license.template;
            previewText = previewText.replace(/\[year\]/g, yearInput.value || new Date().getFullYear());
            previewText = previewText.replace(/\[author\]/g, authorInput.value || '[Your Name]');
            previewText = previewText.replace(/\[project\]/g, projectInput.value || '[Your Project]');
            
            preview.textContent = previewText;
        }
    }
    
    select.addEventListener('change', updatePreview);
    authorInput.addEventListener('input', updatePreview);
    projectInput.addEventListener('input', updatePreview);
    yearInput.addEventListener('input', updatePreview);
    
    // 初始预览
    updatePreview();
}

// 选择许可证进行下载
window.selectLicenseForDownload = function(licenseId) {
    // 激活下载许可证导航项
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#download') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // 显示下载许可证卡片，隐藏其他卡片
    const sections = document.querySelectorAll('.main section');
    sections.forEach(section => {
        if (section.id === 'download') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
    
    // 设置选中的许可证
    const select = document.getElementById('licenseDownloadSelect');
    select.value = licenseId;
    
    // 更新预览
    const authorInput = document.getElementById('authorName');
    const projectInput = document.getElementById('projectName');
    const yearInput = document.getElementById('year');
    const preview = document.getElementById('licensePreview');
    const allLicensesList = [...licenses, ...ccLicenses];
    
    const license = allLicensesList.find(l => l.id === licenseId);
    if (license) {
        let previewText = license.template;
        previewText = previewText.replace(/\[year\]/g, yearInput.value || new Date().getFullYear());
        previewText = previewText.replace(/\[author\]/g, authorInput.value || '[Your Name]');
        previewText = previewText.replace(/\[project\]/g, projectInput.value || '[Your Project]');
        
        preview.textContent = previewText;
    }
    
    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 下载许可证
window.downloadLicense = function() {
    const select = document.getElementById('licenseDownloadSelect');
    const authorInput = document.getElementById('authorName');
    const projectInput = document.getElementById('projectName');
    const yearInput = document.getElementById('year');
    
    const selectedId = select.value;
    const license = allLicenses.find(l => l.id === selectedId);
    
    if (license) {
        let licenseText = license.template;
        licenseText = licenseText.replace(/\[year\]/g, yearInput.value || new Date().getFullYear());
        licenseText = licenseText.replace(/\[author\]/g, authorInput.value || '[Your Name]');
        licenseText = licenseText.replace(/\[project\]/g, projectInput.value || '[Your Project]');
        
        // 创建下载链接
        const blob = new Blob([licenseText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `LICENSE`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// 复制许可证文本
window.copyLicense = function() {
    const preview = document.getElementById('licensePreview');
    const text = preview.textContent;
    
    navigator.clipboard.writeText(text).then(function() {
        alert('许可证文本已复制到剪贴板！');
    }).catch(function(err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制！');
    });
};



// 初始化回到顶部按钮
function initializeBackToTop() {
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);
    
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop(); // 初始检查
}

// 初始化导航链接和卡片切换
function initializeNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.main section');
    
    // 页面加载时只显示默认卡片（选择向导）
    sections.forEach(section => {
        if (section.id === 'wizard') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取目标卡片ID
            const targetId = this.getAttribute('href').substring(1);
            
            // 移除所有导航项的激活状态
            navLinks.forEach(l => l.classList.remove('active'));
            
            // 添加当前导航项的激活状态
            this.classList.add('active');
            
            // 隐藏所有卡片
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // 显示对应的卡片
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
}

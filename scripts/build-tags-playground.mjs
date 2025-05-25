#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import picocolors from "picocolors";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ICONS_FOLDER = path.join(__dirname, "../icons");
const TAGS_FILE = path.join(__dirname, "../tags.json");
const playgroundFile = path.join(__dirname, "../tags-playground.html");

const generateHTML = (iconsWithTags) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tags Playground</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      padding: 20px; 
      background-color: #f5f5f5;
    }
    
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .controls {
      margin-bottom: 20px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .search-input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
      margin-bottom: 10px;
    }
    
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
    }
    
    .icon-card {
      background: white;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: box-shadow 0.2s;
    }
    
    .icon-card:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
    
    .icon-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    
    .icon-svg {
      width: 32px;
      height: 32px;
      stroke: #333;
      stroke-width: 1.5;
      flex-shrink: 0;
    }
    
    .icon-name {
      font-weight: bold;
      font-size: 14px;
      color: #333;
      flex-grow: 1;
    }
    
    .tag-count {
      font-size: 12px;
      color: #666;
      background: #f0f0f0;
      padding: 2px 6px;
      border-radius: 10px;
      margin-left: auto;
    }
    
    .tag-count.low {
      background: #ffebee;
      color: #d32f2f;
    }
    
    .tag-count.medium {
      background: #fff3e0;
      color: #f57c00;
    }
    
    .tag-count.high {
      background: #e8f5e8;
      color: #2e7d32;
    }
    
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    
    .tag {
      background: #e3f2fd;
      color: #1976d2;
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 11px;
      border: none;
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    
    .tag:hover {
      background: #bbdefb;
    }
    
    .tag.editing {
      background: #fff3e0;
      color: #f57c00;
      outline: 1px solid #ff9800;
    }
    
    .tag.protected {
      background: #f3e5f5;
      color: #7b1fa2;
      font-weight: bold;
    }
    
    .tag.protected:hover {
      background: #e1bee7;
    }
    
    .tag-remove {
      background: #f44336;
      color: white;
      border: none;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      font-size: 10px;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
    
    .tag:hover .tag-remove:not(.protected-remove) {
      display: flex;
    }
    
    .tag-remove:hover {
      background: #d32f2f;
    }
    
    .add-tag-btn {
      background: #4caf50;
      color: white;
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 11px;
      border: none;
      cursor: pointer;
    }
    
    .add-tag-btn:hover {
      background: #45a049;
    }
    
    .ai-btn {
      background: #9c27b0;
      color: white;
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 11px;
      border: none;
      cursor: pointer;
      margin-left: 5px;
    }
    
    .ai-btn:hover {
      background: #7b1fa2;
    }
    
    .ai-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    
    .save-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #2196f3;
      color: white;
      padding: 15px 30px;
      border-radius: 25px;
      border: none;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      box-shadow: 0 6px 12px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
    }
    
    .save-btn:hover {
      background: #1976d2;
    }
    
    .save-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    
    .stats {
      text-align: center;
      color: #666;
      margin-bottom: 20px;
    }
    
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Tags Playground</h1>
    <p>Click on tags to edit them, add new tags using the + button, or click × to remove tags</p>
    <p><small>Purple tags are filename-based and cannot be removed • Icons sorted by tag count (fewest first) • AI button generates smart tags</small></p>
  </div>
  
  <div class="controls">
    <input type="text" id="searchInput" class="search-input" placeholder="Search icons or tags...">
  </div>
  
  <div class="stats">
    <span id="iconCount">0</span> icons loaded
  </div>
  
  <div class="icon-grid" id="iconGrid">
    <!-- Icons will be loaded dynamically -->
  </div>
  
  <button class="save-btn" id="saveBtn" onclick="saveChanges()">Save Changes</button>
  
  <script>
    let tagsData = {};
    let hasUnsavedChanges = false;
    
    // Track unsaved changes
    function markAsChanged() {
      hasUnsavedChanges = true;
      const saveBtn = document.getElementById('saveBtn');
      saveBtn.style.background = '#ff6b6b';
      saveBtn.textContent = 'Save Changes *';
    }
    
    function markAsSaved() {
      hasUnsavedChanges = false;
      const saveBtn = document.getElementById('saveBtn');
      saveBtn.style.background = '#4CAF50';
      saveBtn.textContent = 'Save Changes';
    }
    
    // Warn user about unsaved changes
    window.addEventListener('beforeunload', function (e) {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    });
    
    // Load tags data from server
    async function loadTagsData() {
      try {
        const response = await fetch('/tags');
        if (!response.ok) {
          throw new Error('Failed to fetch tags');
        }
        tagsData = await response.json();
        populateIcons();
      } catch (error) {
        console.error('Error loading tags:', error);
        alert('Failed to load tags data. Please refresh the page.');
      }
    }
    
    // Populate icons after loading tags
    function populateIcons() {
      const iconGrid = document.getElementById('iconGrid');
      const iconCount = document.getElementById('iconCount');
      
      // Clear existing content
      iconGrid.innerHTML = '';
      
      // Get sorted icon names by tag count (fewest first), then alphabetically
      const sortedIcons = Object.keys(tagsData).sort((a, b) => {
        const tagsA = tagsData[a] || [];
        const tagsB = tagsData[b] || [];
        
        // Primary sort: by tag count (fewest first)
        if (tagsA.length !== tagsB.length) {
          return tagsA.length - tagsB.length;
        }
        
        // Secondary sort: alphabetically
        return a.localeCompare(b);
      });
      
      sortedIcons.forEach(iconName => {
        const tags = tagsData[iconName] || [];
        const iconCard = createIconCard(iconName, tags);
        iconGrid.appendChild(iconCard);
      });
      
      iconCount.textContent = sortedIcons.length;
    }
    
    // Get protected tags (filename-based tags that cannot be removed)
    function getProtectedTags(iconName) {
      return iconName.split('-');
    }
    
    // Create icon card element
    function createIconCard(iconName, tags) {
      const iconCard = document.createElement('div');
      iconCard.className = 'icon-card';
      iconCard.dataset.iconName = iconName;
      iconCard.dataset.tags = tags.join(',');
      
      const protectedTags = getProtectedTags(iconName);
      const tagCount = tags.length;
      const tagCountClass = tagCount <= 3 ? 'low' : tagCount <= 6 ? 'medium' : 'high';
      
      iconCard.innerHTML = \`
        <div class="icon-header">
          <svg class="icon-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <!-- SVG content will be loaded dynamically -->
          </svg>
          <span class="icon-name">\${iconName}</span>
          <span class="tag-count \${tagCountClass}">\${tagCount} tags</span>
        </div>
        <div class="tags-container">
          \${tags.map(tag => {
            const isProtected = protectedTags.includes(tag);
            return \`<button class="tag \${isProtected ? 'protected' : ''}" onclick="editTag(this)" data-protected="\${isProtected}">
              \${tag}
              <span class="tag-remove \${isProtected ? 'protected-remove' : ''}" onclick="removeTag(event, this)" title="\${isProtected ? 'Filename-based tag cannot be removed' : 'Remove tag'}">×</span>
            </button>\`;
          }).join('')}
          <button class="add-tag-btn" onclick="addTag(this)">+</button>
          <button class="ai-btn" onclick="generateTags(this)" title="Generate tags with AI">AI</button>
        </div>
      \`;
      
      // Load the actual SVG content
      loadIconSVG(iconCard, iconName);
      
      return iconCard;
    }
    
    // Load SVG content for an icon
    async function loadIconSVG(iconCard, iconName) {
      try {
        const response = await fetch(\`/icon/\${iconName}.svg\`);
        if (response.ok) {
          const svgContent = await response.text();
          const svgElement = iconCard.querySelector('.icon-svg');
          // Extract the inner content of the SVG and replace the placeholder
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
          const originalSvg = svgDoc.documentElement;
          
          // Copy all child elements to our placeholder SVG
          svgElement.innerHTML = originalSvg.innerHTML;
        }
      } catch (error) {
        console.error(\`Failed to load SVG for \${iconName}:\`, error);
      }
    }
    
    // Initialize the application
    document.addEventListener('DOMContentLoaded', function() {
      loadTagsData();
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const iconGrid = document.getElementById('iconGrid');
    const iconCount = document.getElementById('iconCount');
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const cards = iconGrid.querySelectorAll('.icon-card');
      let visibleCount = 0;
      
      cards.forEach(card => {
        const iconName = card.dataset.iconName.toLowerCase();
        const tags = card.dataset.tags.toLowerCase();
        const isVisible = iconName.includes(searchTerm) || tags.includes(searchTerm);
        
        card.classList.toggle('hidden', !isVisible);
        if (isVisible) visibleCount++;
      });
      
      iconCount.textContent = visibleCount;
    });
    
    // Tag editing functionality
    function editTag(tagElement) {
      if (tagElement.dataset.protected === 'true') {
        alert('Filename-based tags cannot be edited');
        return;
      }
      
      const originalText = tagElement.childNodes[0].textContent.trim();
      tagElement.classList.add('editing');
      tagElement.contentEditable = true;
      tagElement.focus();
      
      // Select all text
      const range = document.createRange();
      range.selectNodeContents(tagElement.childNodes[0]);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      
      function finishEditing() {
        tagElement.classList.remove('editing');
        tagElement.contentEditable = false;
        
        const newText = tagElement.childNodes[0].textContent.trim();
        if (newText === '' || newText === originalText) {
          tagElement.childNodes[0].textContent = originalText;
          return;
        }
        
        // Update data
        const iconCard = tagElement.closest('.icon-card');
        const iconName = iconCard.dataset.iconName;
        const tagIndex = Array.from(iconCard.querySelectorAll('.tag')).indexOf(tagElement);
        
        tagsData[iconName][tagIndex] = newText;
        
        // Update search data
        iconCard.dataset.tags = tagsData[iconName].join(',');
        
        // Mark as changed
        markAsChanged();
      }
      
      tagElement.addEventListener('blur', finishEditing);
      tagElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          finishEditing();
        }
        if (e.key === 'Escape') {
          tagElement.childNodes[0].textContent = originalText;
          finishEditing();
        }
      });
    }
    
    // Add new tag functionality
    function addTag(addButton) {
      const iconCard = addButton.closest('.icon-card');
      const iconName = iconCard.dataset.iconName;
      const tagsContainer = addButton.parentElement;
      
      const newTag = document.createElement('button');
      newTag.className = 'tag editing';
      newTag.contentEditable = true;
      newTag.dataset.protected = 'false';
      newTag.innerHTML = 'new-tag<span class="tag-remove" onclick="removeTag(event, this)" title="Remove tag">×</span>';
      newTag.onclick = () => editTag(newTag);
      
      tagsContainer.insertBefore(newTag, addButton);
      newTag.focus();
      
      // Select all text
      const range = document.createRange();
      range.selectNodeContents(newTag.childNodes[0]);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      
      function finishAdding() {
        newTag.classList.remove('editing');
        newTag.contentEditable = false;
        
        const newText = newTag.childNodes[0].textContent.trim();
        if (newText === '' || newText === 'new-tag') {
          newTag.remove();
          return;
        }
        
        // Update data
        tagsData[iconName].push(newText);
        
        // Update search data
        iconCard.dataset.tags = tagsData[iconName].join(',');
        
        // Mark as changed
        markAsChanged();
      }
      
      newTag.addEventListener('blur', finishAdding);
      newTag.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          finishAdding();
        }
        if (e.key === 'Escape') {
          newTag.remove();
        }
      });
    }
    
    // AI tag generation functionality
    function generateTags(aiButton) {
      const iconCard = aiButton.closest('.icon-card');
      const iconName = iconCard.dataset.iconName;
      const existingTags = tagsData[iconName] || [];
      
      aiButton.disabled = true;
      aiButton.textContent = '...';
      
      fetch('/generate-tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          iconName: iconName,
          existingTags: existingTags
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Update the tags data
          tagsData[iconName] = data.tags;
          
          // Rebuild the tags container
          const tagsContainer = aiButton.parentElement;
          const protectedTags = iconName.split('-');
          
          tagsContainer.innerHTML = data.tags.map(tag => {
            const isProtected = protectedTags.includes(tag);
            return \`<button class="tag \${isProtected ? 'protected' : ''}" onclick="editTag(this)" data-protected="\${isProtected}">
              \${tag}
              <span class="tag-remove \${isProtected ? 'protected-remove' : ''}" onclick="removeTag(event, this)" title="\${isProtected ? 'Filename-based tag cannot be removed' : 'Remove tag'}">×</span>
            </button>\`;
          }).join('') + 
          '<button class="add-tag-btn" onclick="addTag(this)">+</button>' +
          '<button class="ai-btn" onclick="generateTags(this)" title="Generate tags with AI">AI</button>';
          
          // Update search data
          iconCard.dataset.tags = data.tags.join(',');
          
          // Update tag count
          const tagCountElement = iconCard.querySelector('.tag-count');
          const tagCount = data.tags.length;
          tagCountElement.textContent = \`\${tagCount} tags\`;
          tagCountElement.className = \`tag-count \${tagCount <= 3 ? 'low' : tagCount <= 6 ? 'medium' : 'high'}\`;
          
          // Mark as changed
          markAsChanged();
          
          console.log('AI generated tags for', iconName, ':', data.tags);
        } else {
          alert('Error generating tags: ' + data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error generating tags. Please try again.');
      })
      .finally(() => {
        aiButton.disabled = false;
        aiButton.textContent = 'AI';
      });
    }
    
    // Remove tag functionality
    function removeTag(event, removeButton) {
      event.stopPropagation();
      
      const tagElement = removeButton.parentElement;
      
      if (tagElement.dataset.protected === 'true') {
        alert('Filename-based tags cannot be removed');
        return;
      }
      
      const iconCard = tagElement.closest('.icon-card');
      const iconName = iconCard.dataset.iconName;
      const tagIndex = Array.from(iconCard.querySelectorAll('.tag')).indexOf(tagElement);
      
      tagsData[iconName].splice(tagIndex, 1);
      tagElement.remove();
      
      // Update search data
      iconCard.dataset.tags = tagsData[iconName].join(',');
      
      // Mark as changed
      markAsChanged();
    }
    
    // Save functionality
    function saveChanges() {
      const saveBtn = document.getElementById('saveBtn');
      saveBtn.disabled = true;
      saveBtn.textContent = 'Saving...';
      
      // Sort tags alphabetically for each icon before saving
      const sortedTagsData = {};
      Object.keys(tagsData).forEach(iconName => {
        sortedTagsData[iconName] = [...tagsData[iconName]].sort();
      });
      
      fetch('/save-tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sortedTagsData)
      })
      .then(response => {
        if (response.ok) {
          alert('Tags saved successfully!');
          markAsSaved();
          // Update local data with sorted tags
          tagsData = sortedTagsData;
          // Refresh the display to show sorted tags
          populateIcons();
        } else {
          throw new Error('Failed to save tags');
        }
      })
      .catch(error => {
        console.error('Error saving tags:', error);
        alert('Error saving tags. Please try again.');
      })
      .finally(() => {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Save Changes';
      });
    }
    
    // Double-click to remove tag (legacy support)
    document.addEventListener('dblclick', (e) => {
      if (e.target.classList.contains('tag')) {
        if (e.target.dataset.protected === 'true') {
          alert('Filename-based tags cannot be removed');
          return;
        }
        
        if (confirm('Remove this tag?')) {
          const iconCard = e.target.closest('.icon-card');
          const iconName = iconCard.dataset.iconName;
          const tagIndex = Array.from(iconCard.querySelectorAll('.tag')).indexOf(e.target);
          
          tagsData[iconName].splice(tagIndex, 1);
          e.target.remove();
          
          // Update search data
          iconCard.dataset.tags = tagsData[iconName].join(',');
          
          // Mark as changed
          markAsChanged();
        }
      }
    });
  </script>
</body>
</html>
`;

const generateTagsPlayground = async () => {
  try {
    // Read tags data
    const tagsContent = await fs.readFile(TAGS_FILE, "utf-8");
    const tagsData = JSON.parse(tagsContent);

    // Read icon files
    const iconFiles = await fs.readdir(ICONS_FOLDER);
    const svgFiles = iconFiles.filter((file) => file.endsWith(".svg"));

    // Process icons with their tags
    const iconsWithTags = [];

    for (const file of svgFiles) {
      const iconName = path.basename(file, ".svg");
      const tags = tagsData[iconName] || [];

      if (tags.length > 0) {
        const svgContent = await fs.readFile(
          path.join(ICONS_FOLDER, file),
          "utf-8",
        );
        // Convert SVG to have consistent size and styling
        const processedSvg = svgContent
          .replace(/width="[^"]*"/, 'width="32"')
          .replace(/height="[^"]*"/, 'height="32"')
          .replace(/class="[^"]*"/, 'class="icon-svg"');

        iconsWithTags.push({
          name: iconName,
          svg: processedSvg,
          tags: tags,
        });
      }
    }

    // Sort icons by tag count (ascending), then alphabetically
    iconsWithTags.sort((a, b) => {
      const tagCountDiff = a.tags.length - b.tags.length;
      return tagCountDiff !== 0 ? tagCountDiff : a.name.localeCompare(b.name);
    });

    // Generate HTML
    const htmlContent = generateHTML(iconsWithTags);
    await fs.writeFile(playgroundFile, htmlContent);

    console.log(
      picocolors.green(
        `Tags playground generated: ${path.basename(playgroundFile)}`,
      ),
    );
    console.log(
      picocolors.blue(`Total icons with tags: ${iconsWithTags.length}`),
    );
  } catch (error) {
    console.error(
      picocolors.red("Error generating tags playground:"),
      error.message,
    );
  }
};

generateTagsPlayground();

# AI Analysis Hub - User Guide

## 📚 Overview

This is a centralized hub for comparing AI model performances across different domains. The system is designed to be expandable, allowing you to add unlimited analyses over time.

## 🏗️ File Structure

```
/AI_Analyzer_Crespo/
├─/Sports_Pages
    ├─packers_panthers_interactive.html
    ├─texans_broncos_interactive.html
    ├─vikings_lions_interactive.html
├─/Docs
    ├─OVERVIEW.md
    ├─PACKERS_PANTHERS_SUMMARY.md
    ├─VIKINGS_LIONS_SUMMARY.md
├─/Trash 
├── analysis_template.html              # 📝 Template for new analyses
├── README.md                           # 📚 User guide
└── index.html                          # 🏠 HOME PAGE - Start here
```

## ➕ How to Add a New Analysis

### Step 1: Create Your Analysis Page

1. **Duplicate** the `model_comparison_modern.html` file
2. **Rename** it to something descriptive (e.g., `q4_market_analysis.html`)
3. **Customize** the content:
   - Update the title and hero section
   - Modify the scoring categories to match your analysis type
   - Change the model names/numbers
   - Update insights and findings

### Step 2: Add Preview Card to Home Page

Open `index.html` and add a new card in the `<section class="analysis-grid">` section:

```html
<div class="analysis-card" data-category="YOUR_CATEGORY" onclick="openAnalysis('your-analysis-id')">
    <div class="card-image" style="background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);">
        <div class="card-icon">🎯</div>
        <div class="card-badge">Your Category</div>
    </div>
    <div class="card-content">
        <div class="card-meta">
            <span>📅 Date</span>
            <span>⏱️ X min read</span>
        </div>
        <h3 class="card-title">Your Analysis Title</h3>
        <p class="card-description">Brief description of what this analysis covers.</p>
        <div class="card-stats">
            <div class="stat">
                <span class="stat-label">Models</span>
                <span class="stat-value">3</span>
            </div>
            <div class="stat">
                <span class="stat-label">Winner</span>
                <span class="stat-value">95.0</span>
            </div>
            <div class="stat">
                <span class="stat-label">Categories</span>
                <span class="stat-value">7</span>
            </div>
        </div>
        <button class="view-button">View Analysis</button>
    </div>
</div>
```

### Step 3: Update Navigation Script

In the `index.html` file, find the `openAnalysis()` function and add your case:

```javascript
function openAnalysis(analysisId) {
    if (analysisId === 'sports-week9') {
        window.location.href = 'model_comparison_modern.html';
    } else if (analysisId === 'your-analysis-id') {
        window.location.href = 'your_analysis_file.html';
    }
}
```

### Step 4: Add Filter Category (Optional)

If you're adding a new category, add it to the filter tabs:

```html
<button class="filter-tab" onclick="filterAnalyses('your-category')">Your Category</button>
```

## 🎨 Customization Options

### Card Colors/Gradients

Popular gradient combinations:
- **Purple/Pink**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Blue**: `linear-gradient(135deg, #0071e3 0%, #0077ed 100%)`
- **Green**: `linear-gradient(135deg, #30d158 0%, #30c088 100%)`
- **Red/Orange**: `linear-gradient(135deg, #ff3b30 0%, #ff453a 100%)`
- **Teal**: `linear-gradient(135deg, #00d4ff 0%, #00b8d4 100%)`
- **Yellow**: `linear-gradient(135deg, #ffd60a 0%, #ffc107 100%)`

### Card Icons

Use relevant emojis or icons:
- Sports: 🏈 🏀 ⚽ ⚾ 🏆
- Business: 📈 💼 📊 💰 🎯
- Technology: 💻 🤖 ⚡ 🔧 📱
- Science: 🔬 🧪 🧬 🌡️ 🔭
- Healthcare: 🏥 💊 ⚕️ 🩺 🧑‍⚕️

### Analysis Categories

Suggested categories for different domains:

**Sports Analysis:**
- Statistical Accuracy
- Prediction Quality
- Strategy Depth
- Data Interpretation
- Clarity

**Business Analysis:**
- Market Insight
- Forecast Accuracy
- Risk Assessment
- Strategic Value
- Data Quality

**Technology Analysis:**
- Performance
- Accuracy
- Efficiency
- Usability
- Innovation

## 🔧 Advanced Features

### Adding Images Instead of Icons

Replace the icon with an image:

```html
<div class="card-image">
    <img src="path/to/your/image.jpg" alt="Analysis preview">
    <div class="card-badge">Category</div>
</div>
```

### Making Cards Link Directly

If you don't need the onclick handler, you can wrap the entire card in an anchor tag:

```html
<a href="your_analysis.html" style="text-decoration: none; color: inherit;">
    <div class="analysis-card" data-category="category">
        <!-- card content -->
    </div>
</a>
```

### Adding New Filters

To add custom filters beyond categories, modify the `filterAnalyses()` function:

```javascript
function filterAnalyses(category) {
    const cards = document.querySelectorAll('.analysis-card:not(.add-card)');
    
    cards.forEach(card => {
        if (category === 'your-custom-filter') {
            // Your custom filtering logic
            const someCondition = card.getAttribute('data-some-attribute');
            card.style.display = someCondition ? 'block' : 'none';
        }
        // ... rest of the function
    });
}
```

## 📋 Best Practices

1. **Consistent Naming**: Use descriptive, lowercase filenames with hyphens (e.g., `market-analysis-q4.html`)

2. **Unique IDs**: Each analysis should have a unique ID in the `openAnalysis()` function

3. **Data Attributes**: Always set the `data-category` attribute to enable filtering

4. **Responsive Design**: Test your analysis pages on mobile devices

5. **Performance**: Keep analysis pages focused - if they get too large, consider splitting into multiple pages

6. **Metadata**: Keep the card metadata accurate (date, read time, number of models, etc.)

## 🚀 Future Enhancements

Potential features to add:

- **Search Functionality**: Add a search bar to filter analyses by title/description
- **Tags**: Add multiple tags per analysis beyond just category
- **Favorites**: Allow users to star/favorite analyses
- **Export**: Add ability to export analysis results as PDF
- **Comments**: Add a discussion section for each analysis
- **Data Upload**: Allow users to upload their own data for comparison
- **Templates**: Create analysis templates for common comparison types

## 💡 Tips

- **Start Simple**: Begin with the existing sports analysis as a template
- **Test Navigation**: Always test that the back button works from analysis to home
- **Visual Consistency**: Keep the same design language across all analyses
- **Clear Descriptions**: Write concise, informative card descriptions
- **Update Stats**: Keep the card stats accurate and meaningful

## 🆘 Troubleshooting

**Card not appearing?**
- Check that it's inside the `<section class="analysis-grid">` element
- Verify the `data-category` attribute is set
- Make sure it's before the "Add New" card

**Filter not working?**
- Ensure the category name matches exactly in both the card and filter button
- Check for typos in the `data-category` attribute

**Link not working?**
- Verify the file path in `openAnalysis()` is correct
- Make sure the analysis HTML file is in the same directory
- Check browser console for errors

## 📬 Support

For questions or issues, refer to the inline code comments or create a new analysis by following the steps above.

---

**Version**: 1.0  
**Last Updated**: November 2025

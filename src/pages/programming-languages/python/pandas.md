---
slug: /programming-languages/python/pandas
tags: []
lastModified: 2021-09-12
created: 2021-02-22
title: Pandas
header: [{"depth":1,"name":"Installation","link":"Installation"},{"depth":1,"name":"Usage","link":"Usage"},{"depth":1,"name":"Input and output","link":"Input-and-output"},{"depth":2,"name":"Read","link":"Read"},{"depth":2,"name":"Write","link":"Write"},{"depth":1,"name":"Accessing rows and columns","link":"Accessing-rows-and-columns"},{"depth":1,"name":"Sorting and describing data","link":"Sorting-and-describing-data"},{"depth":1,"name":"Manipulate data","link":"Manipulate-data"},{"depth":1,"name":"Plotting","link":"Plotting"}]
---

# Installation
```python
pip install pandas
```

# Usage
Pandas uses NumPy for most data types. See [full documentation](https://pandas.pydata.org/docs/reference/index.html).

```python
import pandas as pd
```

# Input and output

Read and write files with different formats. See [documentation](https://pandas.pydata.org/docs/reference/io.html).

## Read
```python
# csv
df = pd.read_csv(path)

# excel
df = pd.read_excel(path)

# custom delimiter
df = pd.read_csv(path, delimiter='\t')
```

## Write
```python
# csv
df.to_csv('path.csv', index=False)

# excel
# one sheet
df.to_excel("path.xlsx", sheet_name='Sheet_name_1')

# more than one
df2 = df1.copy()
with pd.ExcelWriter('output.xlsx') as writer:
    df1.to_excel(writer, sheet_name='Sheet_name_1')
    df2.to_excel(writer, sheet_name='Sheet_name_2')

```

# Accessing rows and columns
Selecting and accessing different data. See [user guide](https://pandas.pydata.org/docs/user_guide/indexing.html).


```python
# get the first 4 rows
df.head(4)

# get the last 4 rows
df.tail(4)

# get headers
df.columns

# read specific column
df['A']

# read multiple columns
df[['A', 'B']]

# read specific row
df[0]

# read multiple rows
df[0:4]

# read specific location (row=2, column=1)
df.iloc[2,1]

# loop through each row
for index, row in df.iterrows():
    print(index, row)

# filter
# will give every row with the type value fire
df.loc[df['A'] == 'test']
```

# Sorting and describing data

```python
# will give count, mean, standard deviation, min, max, 25%, 50%, 75%
df.describe()

# sort by column
df.sort_values('A', ascending=True)

# will sort first by name then by type
df.sort_values(['A', 'B'], ascending=True)

# will sort first by name then by type
# the first with ascending=True and the last with ascending=False
df.sort_values(['A', 'B'], ascending=[1, 0])
```

# Manipulate data

```python
# create a new column with the values from column 'name' and 'type'
# it makes sense if 'name' and 'type' are numbers
df['C'] = df['A'] + df['B']
# or
df['C'] = df.iloc[:, :].sum(axis=1)

# remove column
df = df.drop(columns=['C'])

```

# Plotting